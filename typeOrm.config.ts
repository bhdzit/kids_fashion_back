import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import "tsconfig-paths/register.js";

config();

const configService = new ConfigService();

export default  new DataSource({
  type: "postgres",
  host: configService.get("DB_HOST"),
  port: configService.get("DB_PORT"),
  username: configService.get("DB_USERNAME"),
  password: configService.get("DB_PASSWORD"),
  database: configService.get("DB_DATABASE"),
  entities: ["./src/database/entities/**/*.entity{.ts,.js}"],
  migrations: ["./migrations/**/**/*.{js,ts}"],
  synchronize: true,

});
