type JsonValue = {
  hired_at: string;
  fired_at: string;
};

export interface Employee {
  id?: string;
  user_id?: string;
  cpf?: string;
  name: string;
  birthday?: Date;
  gender?: string;
  ethnic?: string;
  docs?: string;
  job?: string;
  contacts?: string;
  address?: string;
  hired_at?: string;
  fired_at?: string;
  contract?: JsonValue;
  course: string;
  completed_at?: string;
  forecast_completed?: string;
  comments?: string;
  salary?: string;
  bank?: string;
  picture?: string;
  school_id: string;
  classes: string[];
  email?: string;
  app?: string;
  qualifications?: string;
}
