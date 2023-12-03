import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { TicketEntity } from 'src/database/entities/tickets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService extends BaseRepository {
    constructor(
      @InjectRepository(TicketEntity)
      protected repository: Repository<TicketEntity>,
    ) {
      super();
    }
  }