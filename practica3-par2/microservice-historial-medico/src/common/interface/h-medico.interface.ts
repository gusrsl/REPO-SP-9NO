/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IHistorialMedico extends Document {
  diagnostico: string;
  tratamiento: string;
}