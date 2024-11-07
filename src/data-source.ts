import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Produt";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations:[],
  subscribers:[]
});