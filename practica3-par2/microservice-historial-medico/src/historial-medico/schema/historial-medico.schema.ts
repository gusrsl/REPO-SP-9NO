/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const HistorialMedicoSchema = new mongoose.Schema(
  {
    diagnostico: { type: String, required: true },
    tratamiento: { type: String, required: true },
  },
  { timestamps: true },
);

HistorialMedicoSchema.index({ diagnostico: 1 }, { unique: true });
