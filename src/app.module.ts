import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ProductosModule } from './modules/productos/productos.module';
@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule, ClienteModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
