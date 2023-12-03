import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaEntity } from 'src/database/entities/cita.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CitaEntity])],
  controllers: [CitasController],
  providers: [CitasService],
  exports:[CitasService]
})
export class CitasModule {}
