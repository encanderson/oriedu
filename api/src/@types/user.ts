export interface User {
  id?: string;
  active?: boolean;
  app?: string;
  cpf?: string;
  email?: string;
  name?: string;
  password?: string;
  job?: string;
  code?: number;
  consents?: {
    terms: boolean;
    privacy: boolean;
  };
  user_id?: string;
  user?: {
    app?: string;
    cpf?: string;
    email?: string;
    name?: string;
  };
  modalities?: string[];
}
