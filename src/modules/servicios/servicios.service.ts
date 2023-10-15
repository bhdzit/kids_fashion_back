import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { ServiciosEntity } from 'src/database/entities/servicios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService extends BaseRepository {
    constructor(
      @InjectRepository(ServiciosEntity)
      protected repository: Repository<ServiciosEntity>,
    ) {
      super();
    }
  }