import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import {
  QueryRequest,
  QueryRequestFilter,
} from 'src/common/decorators/query-request.decorator';
import { UsuarioDto } from './usuarios.dto';
import { UsuarioEntity } from 'src/database/entities/usuario.entity';
import { plainToInstance } from 'class-transformer';

@Controller('usuarios')
export class UsuariosController extends CrudControllerClass {
  constructor(public service: UsuariosService) {
    super();
  }
  public dto = UsuarioDto;

  @Get('/getUsuarios')
  @QueryRequest({
    whereFields: ['id'],
    relationships: ['servicios.servicio'],
    fields: [],
  })
  async getAll(@Req() req: Request, query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }

  @Post("store")
  public async gurdar(@Body() payload): Promise<UsuarioEntity> {
    const dto = plainToInstance(this.dto, payload);
    this.isValidate(dto);
   try {
    const servicios = await this.service.store(payload,false);
    console.log(servicios)
    return servicios[0] as UsuarioEntity;
   } catch (error) {
    console.log(error);
   }

  }
}
