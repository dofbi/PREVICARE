
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

export type AssistantType = 'previcare' | 'setlou';

const CONFIGS: Record<AssistantType, {
  apiEndpoint: string;
  defaultInitialMessage: string;
  defaultQuestions: string[];
  storageKey: string;
}> = {
  previcare: {
    apiEndpoint: '/api/assistant',
    defaultInitialMessage: 'Bonjour ! Je suis l\'Assistant PREVICARE, votre guide pour utiliser l\'application. Comment puis-je vous aider ?',
    defaultQuestions: [
      'Comment accéder à mes documents ?',
      'Comment utiliser la Jurithèque ?',
      'Comment rédiger un courrier avec Xalima ?',
      'Que peut faire SETLOU pour moi ?',
    ],
    storageKey: 'previcare_assistant_chat'
  },
  setlou: {
    apiEndpoint: '/api/ai/setlou',
    defaultInitialMessage: 'Bonjour ! Je suis SETLOU, votre conseiller IA en droit du travail sénégalais. Posez-moi vos questions sur vos droits, les procédures RH ou toute situation juridique liée à votre emploi.',
    defaultQuestions: [
      'Quels sont mes droits en cas de licenciement ?',
      'Comment contester une sanction disciplinaire ?',
      'Que faire en cas de non-paiement de salaire ?',
      'Quelles sont les conditions légales du préavis ?',
    ],
    storageKey: 'previcare_setlou_chat'
  }
};

const getDefaultMessages = (initialMessage: string): ChatMessage[] => [{
  id: '1',
  type: 'bot',
  message: initialMessage,
  timestamp: new Date()
}];

const loadChatHistory = (storageKey: string, initialMessage: string): ChatMessage[] => {
  if (typeof window === 'undefined') {
    return getDefaultMessages(initialMessage);
  }
  try {
    const stored = sessionStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
  } catch (error) {
    console.error('Erreur lors du chargement de l\'historique:', error);
  }
  return getDefaultMessages(initialMessage);
};

const saveChatHistory = (storageKey: string, messages: ChatMessage[]) => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(messages));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'historique:', error);
  }
};

interface AssistanceChatProps {
  variant?: 'compact' | 'full';
  assistantType?: AssistantType;
  predefinedQuestions?: string[];
  initialMessage?: string;
  context?: string;
}

export const AssistanceChat: React.FC<AssistanceChatProps> = ({
  variant = 'compact',
  assistantType = 'previcare',
  predefinedQuestions,
  initialMessage,
  context = ''
}) => {
  const config = CONFIGS[assistantType];
  const effectiveInitialMessage = initialMessage || config.defaultInitialMessage;
  const effectiveQuestions = predefinedQuestions || config.defaultQuestions;

  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    loadChatHistory(config.storageKey, effectiveInitialMessage)
  );
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(messages.length === 1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messageMaxWidth = variant === 'full' ? 'max-w-4xl' : 'max-w-xs lg:max-w-md';

  useEffect(() => {
    saveChatHistory(config.storageKey, messages);
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setShowQuestions(false);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const conversationHistory = [...messages, userMessage].map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.message
      }));

      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversationHistory,
          context: context
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la communication avec l\'assistant');
      }

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer de réponse.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erreur:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: 'Désolé, une erreur s\'est produite. Veuillez réessayer plus tard.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`flex flex-col bg-gray-50 rounded-lg ${variant === 'full' ? 'h-[500px]' : 'h-96'}`}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`${messageMaxWidth} px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 shadow'
              }`}
            >
              {message.type === 'bot' ? (
                <div className="text-sm prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-900 prose-ol:text-gray-900">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.message}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-sm">{message.message}</p>
              )}
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className={`bg-white text-gray-900 shadow ${messageMaxWidth} px-4 py-2 rounded-lg`}>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {showQuestions && effectiveQuestions.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Questions fréquentes :</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {effectiveQuestions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors text-left"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Tapez votre question..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={isTyping || !inputMessage.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
