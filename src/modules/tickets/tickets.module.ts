import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from 'src/database/entities/tickets.entity';
import { CitasModule } from '../citas/citas.module';

@Module({
  imports:[TypeOrmModule.forFeature([TicketEntity]),CitasModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
