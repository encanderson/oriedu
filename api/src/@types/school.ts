export interface School {
  id: string;
  userId: string;
  cnpj: string;
  fantasia: string;
  logo?: string;
  city: string;
  state: string;
  address?: {
    street: string;
    number: string;
    district: string;
    zip: string;
    city: string;
    state: string;
  };
}