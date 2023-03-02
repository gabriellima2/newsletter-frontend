import { HttpClient } from "@/infra/adapters/http-client/http-client";

export const makeHttpClient = () => new HttpClient();
