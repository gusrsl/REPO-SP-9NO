"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const medico_schema_1 = require("./schema/medico.schema");
const medico_controller_1 = require("./medico.controller");
const medico_service_1 = require("./medico.service");
const models_1 = require("../common/models/models");
let MedicoModule = class MedicoModule {
};
exports.MedicoModule = MedicoModule;
exports.MedicoModule = MedicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.MEDICO.name,
                    useFactory: () => medico_schema_1.MedicoSchema,
                },
            ]),
        ],
        controllers: [medico_controller_1.MedicoController],
        providers: [medico_service_1.MedicoService],
    })
], MedicoModule);
//# sourceMappingURL=medico.module.js.map