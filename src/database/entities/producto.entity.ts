
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";


@Entity("productos")
export class ProductoEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    nombre:string;

    @Column({type: "integer"})
    cantidad:number;
}