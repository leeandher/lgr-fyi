export const SUPER_MEGA_SECRET_ULTRA_KEY: string =
  "superMegaUltraSecretHyperSecretMegaLinks";

export const API_URL: string = "http://localhost:7777/api";

export interface ILink {
  _id: string;
  origin: string;
  suffix: string;
  clicks: number;
}

export interface IError {
  message: string;
  type: string;
}
