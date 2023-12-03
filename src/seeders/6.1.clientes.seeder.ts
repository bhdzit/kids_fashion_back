import {
    Seeder,
    SeederFactoryManager,
    setSeederFactory,
  } from "typeorm-extension";
  import { DataSource } from "typeorm";
import { ClienteEntity } from "src/database/entities/cliente.entity";
  
  
  const factory = setSeederFactory(ClienteEntity, (faker: any) => {
    return {};
  });
  export default class ClientesSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
          const factory = factoryManager.get(ClienteEntity);
          const entity = new ClienteEntity();
          entity.nombre = "Cliente publico";
          entity.tel = "";
          entity.padre = "";
          entity.correo = "";
          await factory.save(entity);
        
    }
  }