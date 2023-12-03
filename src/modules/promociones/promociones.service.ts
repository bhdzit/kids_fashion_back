import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { PromocionesEntity } from 'src/database/entities/promociones.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromocionesService extends BaseRepository {
    constructor(
      @InjectRepository(PromocionesEntity)
      protected repository: Repository<PromocionesEntity>,
    ) {
      super();
    }
  }