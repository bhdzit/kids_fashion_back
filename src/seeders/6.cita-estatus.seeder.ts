import {
    Seeder,
    SeederFactoryManager,
    setSeederFactory,
  } from "typeorm-extension";
  import { DataSource } from "typeorm";
import { CatCitaEstatusEntity } from "src/database/entities/cat-cita-estatus.entity";
  
  
  const factory = setSeederFactory(CatCitaEstatusEntity, (faker: any) => {
    return {};
  });
  export default class CitaEstusSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
        
          const factory = factoryManager.get(CatCitaEstatusEntity);
          let entity = new CatCitaEstatusEntity();
          entity.estatus = "Pendiente";
          await factory.save(entity);

          entity = new CatCitaEstatusEntity();
          entity.estatus = "Finalizada";
          await factory.save(entity);

          entity = new CatCitaEstatusEntity();
          entity.estatus = "Cancelada";
          await factory.save(entity);
    }
  }
  