"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoSchema = void 0;
const mongoose = require("mongoose");
exports.MedicoSchema = new mongoose.Schema({
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    tipo: { type: Number, required: true },
}, { timestamps: true });
exports.MedicoSchema.index({ nombre: 1 }, { unique: true });
exports.MedicoSchema.index({ identificacion: 1 }, { unique: true });
//# sourceMappingURL=medico.schema.js.map