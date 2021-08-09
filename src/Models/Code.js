export default class Code {
  constructor(codePiece) {
    this.title =
      codePiece && codePiece.hasOwnProperty("title") ? codePiece.title : "";
    this.explanation =
      codePiece && codePiece.hasOwnProperty("explanation")
        ? codePiece.explanation
        : "";
    this.code =
      codePiece && codePiece.hasOwnProperty("code") ? codePiece.code : "";
  }
}
