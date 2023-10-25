import {
    IsNotEmpty,
    Min
} from 'class-validator';

export class CitaDto {

    @IsNotEmpty()
    @Min(1)
    readonly estilista: number;

    @IsNotEmpty()
    @Min(1)
    readonly servicio: number;

    @IsNotEmpty()
    readonly fecha: Date;    
}