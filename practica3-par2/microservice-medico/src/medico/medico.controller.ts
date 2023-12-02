/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MedicoMsg } from 'src/common/constants';
import { MedicoDTO } from './dto/medico.dto';
import { MedicoService } from './medico.service';

@Controller()
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @MessagePattern(MedicoMsg.CREATE)
  create(@Payload() MedicoDTO: MedicoDTO) {
    return this.medicoService.create(MedicoDTO);
  }

  @MessagePattern(MedicoMsg.FIND_ALL)
  findAll() {
    return this.medicoService.findAll();
  }
 
  @MessagePattern(MedicoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.medicoService.findOne(id);
  }
  @MessagePattern(MedicoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.medicoService.update(payload.id, payload.MedicoDTO);
  }

  @MessagePattern(MedicoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.medicoService.delete(id);
  }
}
