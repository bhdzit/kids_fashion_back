import {
  Seeder,
  SeederFactoryManager,
  setSeederFactory,
} from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CitaEntity } from 'src/database/entities/cita.entity';

const factory = setSeederFactory(CitaEntity, (faker: any) => {
  return {};
});

export default class CitaAgendadaSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
    for (let index = 0; index < 10; index++) {
      const factory = factoryManager.get(CitaEntity);
      let entity: any = {};
      entity.estatus = 1;
      entity.servicio = Math.floor(Math.random()*9)+1;
      entity.estilista = Math.floor(Math.random()*9)+1;
      entity.cliente = 1;
      let fecha = new Date();
      fecha.setDate(fecha.getDate() + (index - 10));
      entity.fecha = fecha;      
      await factory.save(entity);

      const entity2: any = {};
      entity2.estatus = 1;
      entity2.servicio = Math.floor(Math.random()*9)+1;
      entity2.estilista = Math.floor(Math.random()*9)+1;      
      entity2.fecha = fecha.toISOString().replace(/T.*$/, '') + 'T03:00:00'; // YYYY-MM-DD of today;
      entity.cliente = 1;
      await factory.save(entity2);


      const entity3: any = {};
      entity3.estatus = 1;
      entity3.servicio = Math.floor(Math.random()*9)+1;
      entity3.estilista = Math.floor(Math.random()*9)+1;      
      entity3.fecha = fecha.toISOString().replace(/T.*$/, '') + 'T06:00:00'; // YYYY-MM-DD of today;
      entity.cliente = 1;
      await factory.save(entity2);

    }
  }
}
