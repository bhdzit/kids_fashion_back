import {
    IsNotEmpty,
    IsDate
} from 'class-validator';
import { isDate } from 'util/types';

export class HorarioDto {

    @IsNotEmpty()
    readonly start: Date;

    @IsNotEmpty()
    readonly end: Date;

    @IsNotEmpty()
    readonly diaSeman: number;
    
}
