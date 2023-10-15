import { Controller, Get, Req } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { ProductoDto } from './producto.dto';

@Controller('productos')
export class ProductosController extends CrudControllerClass{
  constructor(public service: ProductosService) {
    super();
  }
  public dto = ProductoDto;

  @Get('/getProductos')
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
