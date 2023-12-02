/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HistorialMedicoMsg } from 'src/common/constants';
import { HistorialMedicoDTO } from './dto/historial-medico.dto';
import { HistorialMedicoService } from './historial-medico.service';

@Controller()
export class HistorialMedicoController {
  constructor(private readonly historialMedicoService: HistorialMedicoService) {}

  @MessagePattern(HistorialMedicoMsg.CREATE)
  create(@Payload() historialMedicoDTO: HistorialMedicoDTO) {
    return this.historialMedicoService.create(historialMedicoDTO);
  }

  @MessagePattern(HistorialMedicoMsg.FIND_ALL)
  findAll() {
    return this.historialMedicoService.findAll();
  }

  @MessagePattern(HistorialMedicoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.historialMedicoService.findOne(id);
  }

  @MessagePattern(HistorialMedicoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.historialMedicoService.update(payload.id, payload.historialMedicoDTO);
  }

  @MessagePattern(HistorialMedicoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.historialMedicoService.delete(id);
  }
}
