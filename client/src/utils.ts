export const SUPER_MEGA_SECRET_ULTRA_KEY =
  "superMegaUltraSecretHyperSecretMegaLinks";

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
