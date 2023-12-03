import { Controller, Get, Req } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { PromocionDto } from './promociones.dto';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';

@Controller('promociones')
export class PromocionesController extends CrudControllerClass{
  
  constructor(public service: PromocionesService) {
    super();
  }

  public dto = PromocionDto;

  @Get('/get')
  @QueryRequest({
    whereFields: ["id"],
    relationships: [],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const promociones = await this.service.query(query);
    return promociones;
  }
}