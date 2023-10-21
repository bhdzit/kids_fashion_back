import {
  Seeder,
  SeederFactoryManager,
  setSeederFactory,
} from "typeorm-extension";
import { DataSource } from "typeorm";
import { ProductoEntity } from "src/database/entities/producto.entity";

const factory = setSeederFactory(ProductoEntity, (faker: any) => {
  return {};
});
export default class CarrerasSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    for (let i=1;i<10;i++) {
      
        const factory = factoryManager.get(ProductoEntity);
        const entity = new ProductoEntity();
        entity.nombre = "Shampo "+i;
        entity.cantidad = 10*i;
        await factory.save(entity);
      
    }
  }
}
