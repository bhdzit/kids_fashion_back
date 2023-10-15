import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class ServicioDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    readonly tiempo: number;

    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    readonly costo: number;
}
