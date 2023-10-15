import { Controller, Get, Req } from '@nestjs/common';
import { ServiciosProductosService } from './servicios-productos.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { ServiciosService } from '../servicios.service';
import { ServicioProductoDto } from './servicios-productos';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';

@Controller('servicios-productos')
export class ServiciosProductosController extends CrudControllerClass{
  constructor(public service: ServiciosProductosService) {
    super();
  }
  public dto = ServicioProductoDto;

  @Get('/getProductosOfServices')
  @QueryRequest({
    whereFields: ["servicio"],
    relationships: ["producto"],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }
}
