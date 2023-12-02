"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
let MedicoService = class MedicoService {
    constructor(model) {
        this.model = model;
    }
    async create(medicoDTO) {
        const newMedico = new this.model(medicoDTO);
        return await newMedico.save();
    }
    async findAll() {
        try {
            const medicos = await this.model.find({
                _id: { $exists: true, $ne: null, $type: 'objectId' },
            });
            return medicos;
        }
        catch (error) {
            console.error('Error al buscar todos los médicos', error);
            return [];
        }
    }
    async findOne(id) {
        return await this.model.findById(id);
    }
    async update(id, medicoDTO) {
        return await this.model.findByIdAndUpdate(id, medicoDTO, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return {
            status: common_1.HttpStatus.OK,
            msg: 'Deleted',
        };
    }
};
exports.MedicoService = MedicoService;
exports.MedicoService = MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(models_1.MEDICO.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MedicoService);
//# sourceMappingURL=medico.service.js.map