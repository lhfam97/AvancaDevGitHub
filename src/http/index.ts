import axios from "axios";

const apiKey =
  "8ea321d28863d055c6096d17bd8ed2637c106a569b7eab1a612a3de8558093fa";

export const cryptoHttp = axios.create({
  baseURL: "https://min-api.cryptocompare.com/data/",
  headers: {
    authorization: `Apikey ${apiKey} `,
  },
});
