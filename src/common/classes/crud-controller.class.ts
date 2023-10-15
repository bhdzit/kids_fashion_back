import {BadRequestException, Body, Delete, HttpException, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {BaseEntity} from "typeorm";


import {plainToInstance} from "class-transformer";
import {validateSync} from "class-validator";
import { BaseRepository } from "../contracts/baseRepository";
import { ApiException } from "src/core/api/exceptions/api.exception";
import { ControllerType } from "../contracts/controllerType.interface";

/**
 * Clase abstracta que representa un controlador CRUD básico
 */
export abstract class CrudControllerClass implements ControllerType {
    /**
     * Propiedad abstracta que se espera que sea implementada por
     * las clases hijas
     */
    public abstract service: BaseRepository;
    /**
     * Propiedad abstracta que se espera ser implementada por las clases
     * hijas, sirve para aplicar las validaciones a los request
     */
    public dto: any;

    /**
     * Controlador para la creación de nuevos elementos
     * @param payload - Datos del nuevo elemento a crear
     * @returns Nuevo elemento creado
     */
    @Post("store")
    public async store(@Body() payload): Promise<BaseEntity[]> {

        if (!this.service) {
            throw new ApiException("NonInstantiatedService");
        }
        if (!this.dto) {
            throw new ApiException("DtoIsNotDefined");
        }
        const dto = plainToInstance(this.dto, payload);

        this.validateDto(dto);

        try {
            return await this.service.store(payload);
        } catch (e) {
            throw new ApiException(e);
        }
    }


    /**
     * Controlador para la actualización de elementos existentes
     * @param payload - Datos del elemento a actualizar
     * @param id
     * @returns Elemento actualizado
     */
    @Put("/update/:id")
    async update(@Body() payload, @Param("id") id: number): Promise<BaseEntity> {

        try {
            return await this.service.update(id, payload);
        } catch (e) {
            throw new ApiException(e);
        }
    }


    /**
     * Controlador para la eliminación de elementos existentes
     * @param id
     * @returns Elemento actualizado
     */
    @Delete("/delete/:id")
    async delete(@Param("id") id: number | string): Promise<BaseEntity[]> {
        try {
            return await this.service.delete(id);
        } catch (e) {
            throw new ApiException(e);
        }
    }

    /**
     * Validamos el DTO que se usa dinámicamente
     * en el request
     * @param dto
     * @private
     */
    private validateDto(dto): void {
        const errors = validateSync(dto, {
            validationError: {
                target: true
            },
            dismissDefaultMessages:false
        });
        let costumError = {errors:{
        }}
        errors.map(item=>{
          console.log(this.costumeErrorMsj(item));
            costumError.errors[item.property]=this.costumeErrorMsj(item);
        })

        if (errors.length > 0) {
            console.log(errors);
            throw new HttpException(costumError,HttpStatus.OK);
        }
    }

    public isValidate(dto){
        this.validateDto(dto);
    }

    costumeErrorMsj(error):string{
        const keys = Object.keys(error.constraints)
        switch (keys[0]) {
            case 'isNotEmpty':
                    return "No puede estar vacio"                
                break;
            case 'min':
                    return "El numero debe ser mayor a 0"                
                break;
        
            default:
                return "Verifica el formato de los datos"
                break;
        }

        return "";
    }

}