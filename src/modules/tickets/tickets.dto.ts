import { IsExist } from '@youba/nestjs-dbvalidator';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class TicketsDto {

    @Min(1)
    @IsNotEmpty()
    readonly total: number;

}
