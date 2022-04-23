import { User, Profile } from "@src/@types";

import { InvalidField } from "../errors";

export const verifyTermsConsents = (consents: {
  privacy: boolean;
  terms: boolean;
}): boolean => {
  if (consents.privacy && consents.terms) {
    return;
  }
  throw new InvalidField(
    "É necessário confirmar os termos de uso e privacidade"
  );
};

export const verifyRegister = (user: User): boolean => {
  verifyTermsConsents(user.consents);

  const fields = ["app", "cpf", "email", "password", "job", "name", "consents"];

  let verify = true;
  fields.forEach((item) => {
    if (!user[item]) {
      verify = false;
    }
  });

  Object.keys(user).some((key) => {
    if (!user[key]) {
      verify = false;
    }
  });
  if (verify) {
    return;
  }

  throw new InvalidField("Verificar os campos não preenchidos.");
};

export const filterProfile = (data: Profile): Profile => {
  const fields = ["id", "user_id", "name", "job", "picture", "contacts"];

  const obj = {};

  Object.keys(data).forEach((key) => {
    if (fields.includes(key)) {
      obj[key] = data[key];
    }
  });

  return obj;
};
