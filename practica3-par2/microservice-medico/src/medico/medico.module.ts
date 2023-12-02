/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MedicoSchema } from './schema/medico.schema';
import { MedicoController } from './medico.controller';
import { MedicoService } from './medico.service';
import { MEDICO } from 'src/common/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: MEDICO.name,
        useFactory: () => MedicoSchema,
      },
    ]),
  ],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule {}
