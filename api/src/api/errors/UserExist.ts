export class UserExist extends Error {
  idError: number;
  constructor() {
    super("Usuário(a) já foi existe.");
    this.name = "UserExist";
  }
}
