/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IHistorialMedico } from 'src/common/interfaces/historialm.interface'; // Asegúrate de tener el nombre correcto aquí
import { HistorialMedicoDTO } from './dto/historial-m.dto'; // Asegúrate de tener el nombre correcto aquí
import { HistorialMedicoMSG } from './../common/constants'; // Asegúrate de tener el nombre correcto aquí

@ApiTags('historial-medico') // Asegúrate de tener el nombre correcto aquí
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/historial-medico') // Asegúrate de tener el nombre correcto aquí
export class HistorialMedicoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyHistorialHistorialM = this.clientProxy.clientProxyHistorialM(); // Asegúrate de tener el nombre correcto aquí

  @Post()
  create(@Body() historialMedicoDTO: HistorialMedicoDTO): Observable<IHistorialMedico> {
    return this._clientProxyHistorialHistorialM.send(HistorialMedicoMSG.CREATE, historialMedicoDTO); // Asegúrate de tener el nombre correcto aquí
  }

  @Get()
  findAll(): Observable<IHistorialMedico[]> {
    return this._clientProxyHistorialHistorialM.send(HistorialMedicoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IHistorialMedico> {
    return this._clientProxyHistorialHistorialM.send(HistorialMedicoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() historialMedicoDTO: IHistorialMedico): Observable<IHistorialMedico> {
    return this._clientProxyHistorialHistorialM.send(HistorialMedicoMSG.UPDATE, { id, HistorialMedicoDTO: historialMedicoDTO }); // Asegúrate de tener el nombre correcto aquí
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyHistorialHistorialM.send(HistorialMedicoMSG.DELETE, id);
  }
}
