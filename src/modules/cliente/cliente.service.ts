import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClienteEntity } from 'src/database/entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/contracts/baseRepository';

@Injectable()
export class ClienteService extends BaseRepository {
  constructor(
    @InjectRepository(ClienteEntity)
    protected repository: Repository<ClienteEntity>,
  ) {
    super();
  }
}
