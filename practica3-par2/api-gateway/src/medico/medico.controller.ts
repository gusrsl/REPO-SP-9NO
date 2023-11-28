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
import { IMedico } from 'src/common/interfaces/medico.interface';
import { MedicoDTO } from './dto/medico.dto';
import { MedicoMSG } from './../common/constants';

@ApiTags('medicos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/medico')
export class MedicoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyMedico = this.clientProxy.clientProxyMedicos();

  @Post()
  create(@Body() medicoDTO: MedicoDTO): Observable<IMedico> {
    return this._clientProxyMedico.send(MedicoMSG.CREATE, medicoDTO);
  }

  @Get()
  findAll(): Observable<IMedico[]> {
    return this._clientProxyMedico.send(MedicoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IMedico> {
    return this._clientProxyMedico.send(MedicoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() medicoDTO: IMedico): Observable<IMedico> {
    return this._clientProxyMedico.send(MedicoMSG.UPDATE, { id, MedicoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyMedico.send(MedicoMSG.DELETE, id);
  }
}
