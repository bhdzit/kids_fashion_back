import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class UsuarioDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly usuario: string;

    @IsString()
    @IsNotEmpty()
    readonly color: string;


}
