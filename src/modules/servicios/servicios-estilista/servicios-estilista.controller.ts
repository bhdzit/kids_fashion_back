import { Controller, Get, Req } from '@nestjs/common';
import { ServiciosEstilistaService } from './servicios-estilista.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { ServicioEstilistaDto } from './servicios-estilista.dto';

@Controller('servicios-estilista')
export class ServiciosEstilistaController extends CrudControllerClass {
  constructor(public service: ServiciosEstilistaService) {
    super();
  }
  public dto = ServicioEstilistaDto;

  @Get('/getServiciosOfEstilista')
  @QueryRequest({
    whereFields: ['usuario'],
    relationships: ["servicio"],
    fields: [],
  })
  async getAll(@Req() req: Request, query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }
}
