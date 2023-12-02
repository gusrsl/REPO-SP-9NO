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
exports.MedicoController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
const medico_dto_1 = require("./dto/medico.dto");
const medico_service_1 = require("./medico.service");
let MedicoController = class MedicoController {
    constructor(medicoService) {
        this.medicoService = medicoService;
    }
    create(MedicoDTO) {
        return this.medicoService.create(MedicoDTO);
    }
    findAll() {
        return this.medicoService.findAll();
    }
    findOne(id) {
        return this.medicoService.findOne(id);
    }
    update(payload) {
        return this.medicoService.update(payload.id, payload.MedicoDTO);
    }
    delete(id) {
        return this.medicoService.delete(id);
    }
};
exports.MedicoController = MedicoController;
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.MedicoMsg.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medico_dto_1.MedicoDTO]),
    __metadata("design:returntype", void 0)
], MedicoController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.MedicoMsg.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicoController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.MedicoMsg.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicoController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.MedicoMsg.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MedicoController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.MedicoMsg.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicoController.prototype, "delete", null);
exports.MedicoController = MedicoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [medico_service_1.MedicoService])
], MedicoController);
//# sourceMappingURL=medico.controller.js.map