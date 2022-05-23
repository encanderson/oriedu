import { Prisma } from "@prisma/client";

export interface Discipline {
  name?: string;
  score?: number;
  comments?: string;
}

export interface History {
  school?: string;
  class?: string;
  situation?: string;
  year?: string;
  disciplines?: Discipline[];
}

export interface Parents {
  name?: string;
  contract?: boolean;
  cpf?: string;
  email?: string;
  phone?: string;
  job?: string;
  rg?: string;
  schooling?: string;
  workplace?: string;
}

export interface Registry {
  number?: number;
  page?: number;
  dateRegister?: Date;
  term?: string;
}

export interface Birthplace {
  nationality?: string;
  naturalness?: string;
}

export interface Registration {
  dateRegistration?: string;
  registerNumber?: string;
  registry?: string;
}

export interface Docs {
  cpf?: string;
  rg?: string;
  birthRegistration?: Prisma.JsonObject;
  nis?: string;
  inep?: string;
}

export interface Student {
  birthday?: Date;
  blood?: string;
  class?: string;
  classId?: string;
  contact?: string;
  cpf?: string;
  divorced?: string;
  ethnic?: string;
  fee?: number;
  gender?: string;
  goHomeAlone?: string;
  history?: Prisma.JsonObject[];
  modality?: string;
  name?: string;
  nationality?: string;
  naturalness?: string;
  registerNumber?: number;
  birth_registration?: string;
  rhFactor?: string;
  schoolNumber?: number;
  security_health?: string;
  shift?: string;
  socialProgram?: boolean;
  parents?: Prisma.JsonArray | string;
  nis?: string;
  inep?: string;
  dietaryRestrictions?: string[];
  medicationRestrictions?: string[];
  birthplace?: Prisma.JsonObject;
  docs?: string;
  emergency?: string;
  number?: string;
  dateRegistration?: string;
  registry?: string;
  school_id?: string;
}
