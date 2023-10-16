import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.DB_HOST,
    dialect: "mysql",
    timezone: "-03:00",
  }
);
