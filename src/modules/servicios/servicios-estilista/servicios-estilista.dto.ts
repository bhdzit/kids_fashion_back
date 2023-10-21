import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class ServicioEstilistaDto {

    @IsNumber()
    @IsNotEmpty()
    readonly servicio: number;

    @IsNumber()
    @IsNotEmpty()
    readonly usuario: number;
}
