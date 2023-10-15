import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class ProductoDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: number;

    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    readonly cantidad: number;
}
