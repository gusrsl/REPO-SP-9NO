"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMedicoMsg = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["HistorialmQueue"] = "historal_medicos";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var HistorialMedicoMsg;
(function (HistorialMedicoMsg) {
    HistorialMedicoMsg["CREATE"] = "CREATE_H_MEDICO";
    HistorialMedicoMsg["FIND_ALL"] = "FIND_H_MEDICOS";
    HistorialMedicoMsg["FIND_ONE"] = "FIND_H_MEDICO";
    HistorialMedicoMsg["UPDATE"] = "UPDATE_H_MEDICO";
    HistorialMedicoMsg["DELETE"] = "DELETE_H_MEDICO";
})(HistorialMedicoMsg || (exports.HistorialMedicoMsg = HistorialMedicoMsg = {}));
//# sourceMappingURL=constants.js.map