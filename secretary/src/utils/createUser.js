export const filterUser = (data) => {
  const name = data.firstName + " " + data.lastName;

  const profession = data.profession;
  let app = "";

  if (
    profession === "engenheiro(a)" ||
    profession === "arquiteto(a)" ||
    profession === "agrimensor(a)"
  ) {
    app = "engineer";
  } else if (profession === "empreiteiro(a)") {
    app = "constructor";
  } else if (profession === "fornecedor") {
    app = "provider";
  } else if (profession === "estudante") {
    app = "intern";
  } else {
    app = "worker";
  }

  const user = {
    app: app,
    cpf: data.cpf,
    email: data.email,
    password: data.password,
    profession: profession,
    name: name,
    consents: data.consents,
  };
  return user;
};
