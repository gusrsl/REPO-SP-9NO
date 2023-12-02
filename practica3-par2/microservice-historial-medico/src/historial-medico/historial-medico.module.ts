/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { HISTORIAL_MEDICO } from 'src/common/models/models';
import { HistorialMedicoSchema } from './schema/historial-medico.schema';
import { HistorialMedicoController } from './historial-medico.controller';
import { HistorialMedicoService } from './historial-medico.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: HISTORIAL_MEDICO.name,
        useFactory: () => HistorialMedicoSchema,
      },
    ]),
  ],
  controllers: [HistorialMedicoController],
  providers: [HistorialMedicoService],
})
export class HistorialMModule {}
