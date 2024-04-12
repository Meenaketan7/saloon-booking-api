import express from "express";
import cors from "cors";
import helmet from "helmet";
import { RouterPlugin } from "./plugins/router.plugin";
import { config } from "dotenv";
import { ListenPlugin } from "./plugins";

config();
const app = express();
app
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

RouterPlugin.setup(app);
ListenPlugin.listen(app);
// console.log("---", process.env);
// console.log("-----?", Error);
