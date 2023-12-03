import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class PromocionDto {

    @IsNotEmpty()
    readonly nombre: string;

    @Min(1)
    @IsNotEmpty()
    readonly descuento: number;

}
