export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type PaymentMethodType = 'om' | 'wave' | 'card' | 'mock';

export interface Payment {
  id: string;
  user_id: string;
  subscription_id: string | null;
  amount: number;
  payment_method: PaymentMethodType;
  payment_reference: string | null;
  status: PaymentStatus;
  invoice_number: string | null;
  created_at: string;
}

export interface PaymentWithSubscription extends Payment {
  subscription?: {
    id: string;
    plan?: {
      display_name: string;
    };
  };
}

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, { label: string; color: string }> = {
  pending: { label: 'En attente', color: 'bg-yellow-100 text-yellow-800' },
  completed: { label: 'Complété', color: 'bg-green-100 text-green-800' },
  failed: { label: 'Échoué', color: 'bg-red-100 text-red-800' },
  refunded: { label: 'Remboursé', color: 'bg-purple-100 text-purple-800' },
};

export const PAYMENT_METHODS: Record<PaymentMethodType, { label: string; icon: string }> = {
  om: { label: 'Orange Money', icon: '🟠' },
  wave: { label: 'Wave', icon: '🔵' },
  card: { label: 'Carte bancaire', icon: '💳' },
  mock: { label: 'Test', icon: '🧪' },
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-SN', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' FCFA';
}
