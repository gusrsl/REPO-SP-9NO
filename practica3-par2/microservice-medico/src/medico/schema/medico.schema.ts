/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const MedicoSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    tipo: { type: Number, required: true },
  },
  { timestamps: true },
);

MedicoSchema.index({ nombre: 1 }, { unique: true });
MedicoSchema.index({ identificacion: 1 }, { unique: true });
 