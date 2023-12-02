"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMedicoSchema = void 0;
const mongoose = require("mongoose");
exports.HistorialMedicoSchema = new mongoose.Schema({
    diagnostico: { type: String, required: true },
    tratamiento: { type: String, required: true },
}, { timestamps: true });
exports.HistorialMedicoSchema.index({ diagnostico: 1 }, { unique: true });
//# sourceMappingURL=historial-medico.schema.js.map