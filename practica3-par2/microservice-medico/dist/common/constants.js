"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoMsg = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["MedicoQueue"] = "medicos";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var MedicoMsg;
(function (MedicoMsg) {
    MedicoMsg["CREATE"] = "CREATE_MEDICO";
    MedicoMsg["FIND_ALL"] = "FIND_MEDICOS";
    MedicoMsg["FIND_ONE"] = "FIND_MEDICO";
    MedicoMsg["UPDATE"] = "UPDATE_MEDICO";
    MedicoMsg["DELETE"] = "DELETE_MEDICO";
})(MedicoMsg || (exports.MedicoMsg = MedicoMsg = {}));
//# sourceMappingURL=constants.js.map