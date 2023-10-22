import { Module } from '@nestjs/common';
import { HorarioEstilistaService } from './horario-estilista.service';
import { HorarioEstilistaController } from './horario-estilista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioEntity } from 'src/database/entities/horario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HorarioEntity])],
  controllers: [HorarioEstilistaController],
  providers: [HorarioEstilistaService],
})
export class HorarioEstilistaModule {}
