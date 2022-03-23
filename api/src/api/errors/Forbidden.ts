export class Forbidden extends Error {
  idError: number;
  constructor() {
    super("Acesso negado.");
    this.name = "Forbidden";
  }
}
