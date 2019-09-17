// Constants
export const SUPER_MEGA_SECRET_ULTRA_KEY: string =
  "superMegaUltraSecretHyperSecretMegaLinks";

export const API_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:7777/api"
    : "https://lgr.fyi/api";

// Interfaces
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
