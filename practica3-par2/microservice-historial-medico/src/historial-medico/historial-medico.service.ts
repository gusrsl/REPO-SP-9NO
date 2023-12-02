/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HISTORIAL_MEDICO } from 'src/common/models/models'; // Asegúrate de tener el nombre correcto aquí
import { IHistorialMedico } from 'src/common/interface/h-medico.interface'; // Asegúrate de tener el nombre correcto aquí
import { HistorialMedicoDTO } from './dto/historial-medico.dto'; // Asegúrate de tener el nombre correcto aquí

@Injectable()
export class HistorialMedicoService {
  constructor(@InjectModel(HISTORIAL_MEDICO.name) private readonly model: Model<IHistorialMedico>) {}

  async create(historialMedicoDTO: HistorialMedicoDTO): Promise<IHistorialMedico> {
    const newHistorialMedico = new this.model(historialMedicoDTO);
    return await newHistorialMedico.save();
  }

  async findAll(): Promise<IHistorialMedico[]> {
    try {
      // Asegurarse de que el _id sea un ObjectId válido antes de incluirlo en la búsqueda
      const historialesMedicos = await this.model.find({
        _id: { $exists: true, $ne: null, $type: 'objectId' },
      });

      return historialesMedicos;
    } catch (error) {
      // Manejar el error, por ejemplo, loguearlo
      console.error('Error al buscar todos los historiales médicos', error);
      return []; // o manejar el error de otra manera según tu caso
    }
  }

  async findOne(id: string): Promise<IHistorialMedico> {
    return await this.model.findById(id);
  }

  async update(id: string, historialMedicoDTO: HistorialMedicoDTO): Promise<IHistorialMedico> {
    return await this.model.findByIdAndUpdate(id, historialMedicoDTO, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
