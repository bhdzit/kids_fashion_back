import { Controller, Get, Req } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { CitaDto } from './citas.dto';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';

@Controller('citas')
export class CitasController extends CrudControllerClass{
  constructor(public service: CitasService) {
    super();
  }
  public dto = CitaDto;

  @Get('/getCitas')
  @QueryRequest({
    whereFields: ["id"],
    relationships: ["estilista","servicio","estatus"],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const citas = await this.service.query(query);
    return citas;
  }
}
