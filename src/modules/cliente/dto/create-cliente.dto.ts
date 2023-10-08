import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class CreateClienteDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: number;

    @IsString()
    @IsNotEmpty()
    readonly tel:string;

    @IsString()
    @IsNotEmpty()
    readonly padre:string;

    @IsString()
    @IsNotEmpty()
    readonly correo:string;
}
