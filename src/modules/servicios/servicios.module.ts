import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { ServiciosEntity } from 'src/database/entities/servicios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ServiciosEntity])],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
