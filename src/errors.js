export class HttpError extends Error {
  constructor(code) {
    super(`Неверный код ответа ${code}`);
    this.name = "HttpError";
    this.code = code;
  }
}
