export interface School {
  id: string;
  user_id: string;
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
  contacts?: {
    phone?: string;
    email?: string;
  };
  email?: string;
  phone?: string;
}
