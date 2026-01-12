declare module "konami-code-js" {
  export default class Konami {
    constructor(callback: () => void);
    disconnect(): void;
  }
}