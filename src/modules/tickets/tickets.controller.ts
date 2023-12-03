import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CrudControllerClass } from 'src/common/classes/crud-controller.class';
import { TicketsDto } from './tickets.dto';
import { QueryRequest, QueryRequestFilter } from 'src/common/decorators/query-request.decorator';
import { plainToInstance } from 'class-transformer';
import { ServiciosEntity } from 'src/database/entities/servicios.entity';
import { CitasService } from '../citas/citas.service';
import { TicketEntity } from 'src/database/entities/tickets.entity';

@Controller('tickets')
export class TicketsController extends CrudControllerClass{
  constructor(public service: TicketsService, private _citasService:CitasService) {
    super();
  }
  public dto = TicketsDto;

  @Get('/get')
  @QueryRequest({
    whereFields: ["id"],
    relationships: [],
    fields: []
})
  async getAll(@Req() req: Request,query: QueryRequestFilter): Promise<any> {
    const cliente = await this.service.query(query);
    return cliente;
  }

  @Post("store")
  public async gurdar(@Body() payload): Promise<TicketEntity> {
    const dto = plainToInstance(this.dto, payload);
    this.isValidate(dto);
   try {

    //Si no exite previa cita
    if(payload.cita.id==undefined){
      const cita = await this._citasService.store(payload.cita,false);      
    }
    
    const servicios = await this.service.store(payload,false);
    console.log(servicios)
    return servicios[0] as TicketEntity;
   } catch (error) {
    console.log(error);
   }

  }

}