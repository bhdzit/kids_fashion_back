import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { ServiciosProductoEntity } from 'src/database/entities/servicios-productos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosProductosService  extends BaseRepository {
    constructor(
      @InjectRepository(ServiciosProductoEntity)
      protected repository: Repository<ServiciosProductoEntity>,
    ) {
      super();
    }
  }
