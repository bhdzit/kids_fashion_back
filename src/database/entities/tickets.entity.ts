import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CitaEntity } from "./cita.entity";

@Entity("ticket")
export class TicketEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",nullable:true})
    observaciones:string;

    @Column({type: "integer"})
    total:number

    @OneToOne(()=>CitaEntity)
    @JoinColumn()
    cita:CitaEntity;

    @Column({type: "boolean", default:false})
    bajaLogica:boolean;
}