import {
    Seeder,
    SeederFactoryManager,
    setSeederFactory,
  } from "typeorm-extension";
  import { DataSource } from "typeorm";
import { ServiciosEstilistaEntity } from "src/database/entities/servicios-estilista.entity";
import { ServiciosEntity } from "src/database/entities/servicios.entity";
import { UsuarioEntity } from "src/database/entities/usuario.entity";
  
  const factory = setSeederFactory(ServiciosEstilistaEntity, (faker: any) => {
    return {};
  });
  export default class ServiciosEstilistaSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
      const serviciosList = await ServiciosEntity.find();
      const usuariosList = await UsuarioEntity.find();
      for (let i=1;i<30;i++) {
          const factory = factoryManager.get(ServiciosEstilistaEntity);
          const entity = new ServiciosEstilistaEntity();
          entity.servicio = serviciosList[Math.floor((Math.random() * serviciosList.length))];
          entity.usuario = usuariosList[Math.floor((Math.random() * usuariosList.length))];

          await factory.save(entity);
        
      }
    }
  }