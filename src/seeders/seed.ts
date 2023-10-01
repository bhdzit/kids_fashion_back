import "reflect-metadata";
import "tsconfig-paths/register.js";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions, setSeederFactory } from "typeorm-extension";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

config();


const configService = new ConfigService();

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: configService.get("DB_HOST"),
    port: configService.get("DB_PORT"),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_DATABASE"),
    entities: ["./src/database/entities/**/*.entity{.ts,.js}"],
    seeds: ["./src/seeders/**/*.seeder{.ts,.js}"],
    synchronize: true
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
    await runSeeders(dataSource);
    process.exit();
});