import {
    Seeder,
    SeederFactoryManager,
    setSeederFactory,
  } from "typeorm-extension";
  import { DataSource } from "typeorm";
import { ServiciosProductoEntity } from "src/database/entities/servicios-productos.entity";
import { ServiciosEntity } from "src/database/entities/servicios.entity";
import { ProductoEntity } from "src/database/entities/producto.entity";

  
  const factory = setSeederFactory(ServiciosProductoEntity, (faker: any) => {
    return {};
  });
  export default class ServiciosProductosSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
      const serviciosList = await ServiciosEntity.find();
      const productosList = await ProductoEntity.find();
      for (let i=1;i<30;i++) {
          const factory = factoryManager.get(ServiciosProductoEntity);
          const entity = new ServiciosProductoEntity();
          entity.servicio = serviciosList[Math.floor((Math.random() * serviciosList.length))];
          entity.producto = productosList[Math.floor((Math.random() * productosList.length))];
          entity.cantidad= 10*i

          await factory.save(entity);
        
      }
    }
  }