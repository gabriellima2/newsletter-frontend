import { HttpClient } from "@/infra/adapters/http-client";

export const makeHttpClient = () => new HttpClient();
