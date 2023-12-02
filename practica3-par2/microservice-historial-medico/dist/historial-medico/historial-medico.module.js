"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
const historial_medico_schema_1 = require("./schema/historial-medico.schema");
const historial_medico_controller_1 = require("./historial-medico.controller");
const historial_medico_service_1 = require("./historial-medico.service");
let HistorialMModule = class HistorialMModule {
};
exports.HistorialMModule = HistorialMModule;
exports.HistorialMModule = HistorialMModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.HISTORIAL_MEDICO.name,
                    useFactory: () => historial_medico_schema_1.HistorialMedicoSchema,
                },
            ]),
        ],
        controllers: [historial_medico_controller_1.HistorialMedicoController],
        providers: [historial_medico_service_1.HistorialMedicoService],
    })
], HistorialMModule);
//# sourceMappingURL=historial-medico.module.js.map