import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { ProductoEntity } from 'src/database/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService extends BaseRepository {
    constructor(
      @InjectRepository(ProductoEntity)
      protected repository: Repository<ProductoEntity>,
    ) {
      super();
    }
  }
  