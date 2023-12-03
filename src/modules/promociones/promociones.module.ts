import { Module } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { PromocionesController } from './promociones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromocionesEntity } from 'src/database/entities/promociones.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PromocionesEntity])],
  controllers: [PromocionesController],
  providers: [PromocionesService],
})
export class PromocionesModule {}
