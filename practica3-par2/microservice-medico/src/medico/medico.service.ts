/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MEDICO } from 'src/common/models/models';
import { IMedico } from 'src/common/interface/medico.interface';
import { MedicoDTO } from './dto/medico.dto';

@Injectable()
export class MedicoService {
  constructor(@InjectModel(MEDICO.name) private readonly model: Model<IMedico>) {}

  
  async create(medicoDTO: MedicoDTO): Promise<IMedico> {
    const newMedico = new this.model(medicoDTO);
    return await newMedico.save();
  }

  async findAll(): Promise<IMedico[]> {
    try {
      // Asegurarse de que el _id sea un ObjectId válido antes de incluirlo en la búsqueda
      const medicos = await this.model.find({
        _id: { $exists: true, $ne: null, $type: 'objectId' },
      });

      return medicos;
    } catch (error) {
      // Manejar el error, por ejemplo, loguearlo
      console.error('Error al buscar todos los médicos', error);
      return []; // o manejar el error de otra manera según tu caso
    }
  }

  async findOne(id: string): Promise<IMedico> {
    return await this.model.findById(id);
  }

  async update(id: string, medicoDTO: MedicoDTO): Promise<IMedico> {
    return await this.model.findByIdAndUpdate(id, medicoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
