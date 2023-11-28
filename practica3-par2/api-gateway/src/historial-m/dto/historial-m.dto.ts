/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'; // Eliminé la importación de IsEmail ya que no se usa en tu DTO original

export class HistorialMedicoDTO { // Asegúrate de tener el nombre correcto aquí
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    diagnostico: string; // Asegúrate de tener el nombre correcto aquí

    @IsString()
    @IsNotEmpty()
    tratamiento: string; // Asegúrate de tener el nombre correcto aquí
}
