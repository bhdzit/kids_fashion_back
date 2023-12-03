import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { ServiciosEntity } from './servicios.entity';
import { CatCitaEstatusEntity } from './cat-cita-estatus.entity';
import { TicketEntity } from './tickets.entity';
import { ClienteEntity } from './cliente.entity';

@Entity('cita')
export class CitaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.cita)
  estilista: UsuarioEntity;

  @ManyToOne(() => ServiciosEntity, (servicio) => servicio.servicio)
  servicio: ServiciosEntity;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.citas)
  cliente: ClienteEntity;

  @ManyToOne(() => CatCitaEstatusEntity, (estatus) => estatus.cita)
  estatus: CatCitaEstatusEntity;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @OneToOne(()=>TicketEntity,(ticket)=>ticket.cita)
  ticket:TicketEntity;
}
