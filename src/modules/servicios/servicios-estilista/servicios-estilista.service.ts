import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { ServiciosEstilistaEntity } from 'src/database/entities/servicios-estilista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosEstilistaService extends BaseRepository {
    constructor(
      @InjectRepository(ServiciosEstilistaEntity)
      protected repository: Repository<ServiciosEstilistaEntity>,
    ) {
      super();
    }
  }