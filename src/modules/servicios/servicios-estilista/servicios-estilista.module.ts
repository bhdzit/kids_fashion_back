import { Module } from '@nestjs/common';
import { ServiciosEstilistaService } from './servicios-estilista.service';
import { ServiciosEstilistaController } from './servicios-estilista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosEstilistaEntity } from 'src/database/entities/servicios-estilista.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ServiciosEstilistaEntity])],
  controllers: [ServiciosEstilistaController],
  providers: [ServiciosEstilistaService],
})
export class ServiciosEstilistaModule {}
