export class UserExist extends Error {
  idError: number;
  constructor() {
    super("Usuário(a) já foi registrado.");
    this.name = "UserExist";
  }
}
