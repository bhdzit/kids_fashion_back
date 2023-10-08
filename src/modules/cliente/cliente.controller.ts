import {
  Controller,
  Get,
  Req,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { BaseRepository } from 'src/common/contracts/baseRepository';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController extends CrudControllerClass{
  constructor(public service: ClienteService) {
    super();
  }
  public dto = CreateClienteDto;

  @Get('/getClientes')
  @QueryRequest({
    whereFields: ["id"],
    relationships: [],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }
}
