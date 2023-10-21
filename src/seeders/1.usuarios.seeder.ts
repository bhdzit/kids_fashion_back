import {
  Seeder,
  SeederFactoryManager,
  setSeederFactory,
} from "typeorm-extension";
import { DataSource } from "typeorm";
import { UsuarioEntity } from "src/database/entities/usuario.entity";


const factory = setSeederFactory(UsuarioEntity, (faker: any) => {
  return {};
});
export default class UsuariosSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    for (let i=1;i<10;i++) {
      
        const factory = factoryManager.get(UsuarioEntity);
        const entity = new UsuarioEntity();
        entity.nombre = "Estilista "+i;
        entity.usuario = "Estilista "+i;
        await factory.save(entity);
      
    }
  }
}
