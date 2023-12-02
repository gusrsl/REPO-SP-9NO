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
exports.HistorialMedicoController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
const historial_medico_dto_1 = require("./dto/historial-medico.dto");
const historial_medico_service_1 = require("./historial-medico.service");
let HistorialMedicoController = class HistorialMedicoController {
    constructor(historialMedicoService) {
        this.historialMedicoService = historialMedicoService;
    }
    create(historialMedicoDTO) {
        return this.historialMedicoService.create(historialMedicoDTO);
    }
    findAll() {
        return this.historialMedicoService.findAll();
    }
    findOne(id) {
        return this.historialMedicoService.findOne(id);
    }
    update(payload) {
        return this.historialMedicoService.update(payload.id, payload.historialMedicoDTO);
    }
    delete(id) {
        return this.historialMedicoService.delete(id);
    }
};
exports.HistorialMedicoController = HistorialMedicoController;
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.HistorialMedicoMsg.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [historial_medico_dto_1.HistorialMedicoDTO]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.HistorialMedicoMsg.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.HistorialMedicoMsg.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.HistorialMedicoMsg.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.HistorialMedicoMsg.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "delete", null);
exports.HistorialMedicoController = HistorialMedicoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [historial_medico_service_1.HistorialMedicoService])
], HistorialMedicoController);
//# sourceMappingURL=historial-medico.controller.js.map