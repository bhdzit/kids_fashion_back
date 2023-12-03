import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("promociones")
export class PromocionesEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    nombre:string;

    @Column({type:"integer"})
    descuento:number;

}