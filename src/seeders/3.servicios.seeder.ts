import {
    Seeder,
    SeederFactoryManager,
    setSeederFactory,
  } from "typeorm-extension";
  import { DataSource } from "typeorm";
import { ServiciosEntity } from "src/database/entities/servicios.entity";
  
  const factory = setSeederFactory(ServiciosEntity, (faker: any) => {
    return {};
  });
  export default class ServiciosSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
      for (let i=1;i<10;i++) {
        
          const factory = factoryManager.get(ServiciosEntity);
          const entity = new ServiciosEntity();
          entity.nombre = "Servicio "+i;
          entity.costo = 10*i;
          entity.tiempo = 10*i;
          await factory.save(entity);
        
      }
    }
  }