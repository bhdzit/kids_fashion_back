import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { HorarioEntity } from 'src/database/entities/horario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorarioEstilistaService extends BaseRepository {
    constructor(
      @InjectRepository(HorarioEntity)
      protected repository: Repository<HorarioEntity>,
    ) {
      super();
    }
  }
  