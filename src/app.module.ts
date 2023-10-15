import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ProductosModule } from './modules/productos/productos.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { ServiciosProductosModule } from './modules/servicios/servicios-productos/servicios-productos.module';
@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule, ClienteModule, ProductosModule, ServiciosModule, ServiciosProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
