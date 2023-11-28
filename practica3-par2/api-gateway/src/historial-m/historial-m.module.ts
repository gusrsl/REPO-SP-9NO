/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { HistorialMedicoController } from './historial-m.controller';

@Module({
  imports: [ProxyModule],
  controllers: [HistorialMedicoController],
})
export class HistorialMModule {}
