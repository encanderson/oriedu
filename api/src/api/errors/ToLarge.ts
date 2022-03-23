export class ToLarge extends Error {
  idError: number;
  constructor() {
    super("O arquivo enviado deve ser menor.");
    this.name = "ToLarge";
  }
}
