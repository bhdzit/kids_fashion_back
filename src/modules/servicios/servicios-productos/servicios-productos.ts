import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class ServicioProductoDto {


    @IsNumber()
    @IsNotEmpty()
    readonly producto: number;

    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    readonly cantidad: number;
}
