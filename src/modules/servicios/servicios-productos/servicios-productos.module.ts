import { Module } from '@nestjs/common';
import { ServiciosProductosService } from './servicios-productos.service';
import { ServiciosProductosController } from './servicios-productos.controller';
import { ServiciosProductoEntity } from 'src/database/entities/servicios-productos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ServiciosProductoEntity])],
  controllers: [ServiciosProductosController],
  providers: [ServiciosProductosService],
})
export class ServiciosProductosModule {}
