import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { UsuarioEntity } from 'src/database/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService extends BaseRepository {
    constructor(
      @InjectRepository(UsuarioEntity)
      protected repository: Repository<UsuarioEntity>,
    ) {
      super();
    }
  }
