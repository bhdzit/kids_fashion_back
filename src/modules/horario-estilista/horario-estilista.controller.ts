import { Controller, Get, Req } from '@nestjs/common';
import { HorarioEstilistaService } from './horario-estilista.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { HorarioDto } from './horario-estilista.dto';

@Controller('horario-estilista')
export class HorarioEstilistaController extends CrudControllerClass{
  constructor(public service: HorarioEstilistaService) {
    super();
  }
  public dto = HorarioDto;

  @Get('/getHorario')
  @QueryRequest({
    whereFields: ["id","usuario"],
    relationships: [],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const horarios = await this.service.query(query);
    return horarios;
  }

}