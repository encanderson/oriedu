export const filterUser = (data) => {
  const name = data.firstName + " " + data.lastName;

  const job = data.job;
  let app = "";

  if (job === "Secretário(a)") {
    app = "secretaria";
  }

  const user = {
    app: app,
    cpf: data.cpf,
    email: data.email,
    password: data.password,
    job: job,
    name: name,
    consents: data.consents,
  };
  return user;
};
