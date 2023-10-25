import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { CitaEntity } from 'src/database/entities/cita.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitasService extends BaseRepository {
    constructor(
      @InjectRepository(CitaEntity)
      protected repository: Repository<CitaEntity>,
    ) {
      super();
    }
  }
  