export interface SubscriptionPlan {
  id: string;
  name: string;
  display_name: string;
  description: string | null;
  price: number;
  billing_period: 'monthly' | 'yearly';
  features: string[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: SubscriptionStatus;
  contract_number: string | null;
  payment_reference: string | null;
  payment_method: PaymentMethod | null;
  starts_at: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
  plan?: SubscriptionPlan;
}

export type SubscriptionStatus = 'pending' | 'active' | 'expired' | 'cancelled';

export type PaymentMethod = 'om' | 'wave' | 'card' | 'mock';

export interface SubscriptionWithPlan extends Subscription {
  plan: SubscriptionPlan;
}

export const PLAN_BADGES: Record<string, { color: string; label: string }> = {
  essentiel: { color: 'bg-blue-100 text-blue-800', label: 'Essentiel' },
  serenite: { color: 'bg-purple-100 text-purple-800', label: 'Serenite' },
  integral: { color: 'bg-amber-100 text-amber-800', label: 'Integral' },
  entreprise: { color: 'bg-gray-100 text-gray-800', label: 'Entreprise' },
};

export const STATUS_LABELS: Record<SubscriptionStatus, { color: string; label: string }> = {
  pending: { color: 'bg-yellow-100 text-yellow-800', label: 'En attente' },
  active: { color: 'bg-green-100 text-green-800', label: 'Actif' },
  expired: { color: 'bg-red-100 text-red-800', label: 'Expiré' },
  cancelled: { color: 'bg-gray-100 text-gray-800', label: 'Annulé' },
};
