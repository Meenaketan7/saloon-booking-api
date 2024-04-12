import { config } from "dotenv";

config();
const configs = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  API_VERSION: `api/v1`,
};

export { configs };
