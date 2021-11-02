import axios, { AxiosRequestConfig } from "axios";

const API_ENDPOINT = "https://production.suggestic.com/graphql";
const AUTH_TOKEN = "6f801629974bb2e9f9b00a495405890739505b88";
const USER_ID = "1997c89c-3ee4-4475-b482-3270fca39ac9";

export const apiRequest = async (config: AxiosRequestConfig) => {
  const headers = config.headers || {};
  try {
    const req = await axios({
      ...config,
      url: API_ENDPOINT,
      method: "POST",
      headers: {
        ...headers,
        authorization: `Token ${AUTH_TOKEN}`,
        "sg-user": USER_ID,
      },
    });
    const res = await req.data;

    return res;
  } catch (error) {
    console.log({ error });

    return error;
  }
};
