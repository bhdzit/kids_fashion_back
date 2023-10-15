import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { ServicioDto } from './servicios.dto';
import { ServiciosEntity } from 'src/database/entities/servicios.entity';
import { plainToInstance } from 'class-transformer';

@Controller('servicios')
export class ServiciosController extends CrudControllerClass{
  constructor(public service: ServiciosService) {
    super();
  }
  public dto = ServicioDto;

  @Get('/getServicios')
  @QueryRequest({
    whereFields: ["id"],
    relationships: ["productos.producto"],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }

  @Post("store")
  public async gurdar(@Body() payload): Promise<ServiciosEntity> {
    const dto = plainToInstance(this.dto, payload);
    this.isValidate(dto);
   try {
    const servicios = await this.service.store(payload,false);
    console.log(servicios)
    return servicios[0] as ServiciosEntity;
   } catch (error) {
    console.log(error);
   }

  }

  

}
