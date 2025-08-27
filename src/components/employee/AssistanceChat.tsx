
import React, { useState } from 'react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

const predefinedQuestions = [
  "Comment puis-je vérifier mes cotisations IPRES ?",
  "Comment archiver un nouveau document ?",
  "Où puis-je voir l'historique de ma carrière ?",
  "Comment mettre à jour mes informations personnelles ?",
  "Que faire si je constate une erreur dans mes cotisations ?"
];

export const AssistanceChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      message: 'Bonjour ! Je suis votre assistant virtuel PREVICARE. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message.trim());
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('ipres') || message.includes('cotisation')) {
      return 'Pour consulter vos cotisations IPRES, rendez-vous dans la section "Suivi IPRES" de votre tableau de bord. Vous y trouverez l\'historique complet de vos cotisations et pourrez utiliser notre calculateur de retraite.';
    }
    
    if (message.includes('document') || message.includes('archiver')) {
      return 'Pour archiver un document, allez dans la section "Documents" et cliquez sur "Ajouter un document". Vous pouvez télécharger des fichiers PDF, Word ou images jusqu\'à 10MB.';
    }
    
    if (message.includes('carrière') || message.includes('historique')) {
      return 'Votre historique de carrière est disponible dans la section "Carrière". Vous y trouverez votre timeline professionnelle, vos contrats et formations.';
    }
    
    if (message.includes('profil') || message.includes('information')) {
      return 'Pour mettre à jour vos informations personnelles, cliquez sur "Paramètres" dans le menu de navigation. Assurez-vous de compléter tous les champs obligatoires.';
    }
    
    if (message.includes('erreur') || message.includes('problème')) {
      return 'Si vous constatez une erreur, vous pouvez signaler un problème via cette interface ou en utilisant le bouton "Signaler un problème" dans la section IPRES. Notre équipe reviendra vers vous sous 48h.';
    }
    
    return 'Je comprends votre question. Pour obtenir une aide plus spécifique, je vous recommande de consulter notre FAQ ou de contacter notre support technique. Puis-je vous aider avec autre chose ?';
  };

  return (
    <div className="flex flex-col h-96 bg-gray-50 rounded-lg">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 shadow'
              }`}
            >
              <p className="text-sm">{message.message}</p>
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
            <div className="bg-white text-gray-900 shadow max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Predefined questions */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Questions fréquentes :</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {predefinedQuestions.slice(0, 3).map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
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
