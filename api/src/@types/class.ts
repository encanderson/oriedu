import { Prisma } from "@prisma/client";

export interface ClassForm {
  id?: string;
  class?: string;
  modality?: string;
  shift?: string;
  school_id?: string;
  subjects?: string[];
  teachers?: Prisma.JsonArray;
}
