export class Forbidden extends Error {
  idError: number;
  constructor() {
    super("Acesso negado, verifique suas credenciais.");
    this.name = "Forbidden";
  }
}
