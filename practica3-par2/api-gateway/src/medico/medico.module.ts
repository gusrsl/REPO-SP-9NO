/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { MedicoController } from './medico.controller';

@Module({
  imports: [ProxyModule],
  controllers: [MedicoController],
})
export class MedicoModule {}
