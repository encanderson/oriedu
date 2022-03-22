export interface User {
  id?: string;
  active?: boolean;
  app?: string;
  cpf?: string;
  email?: string;
  password?: string;
  job?: string;
  code?: number;
  consents?: {
    terms: boolean;
    privacy: boolean;
  };
  userId?: string;
}
