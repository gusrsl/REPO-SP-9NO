import { HistorialMedicoDTO } from './dto/historial-medico.dto';
import { HistorialMedicoService } from './historial-medico.service';
export declare class HistorialMedicoController {
    private readonly historialMedicoService;
    constructor(historialMedicoService: HistorialMedicoService);
    create(historialMedicoDTO: HistorialMedicoDTO): Promise<import("../common/interface/h-medico.interface").IHistorialMedico>;
    findAll(): Promise<import("../common/interface/h-medico.interface").IHistorialMedico[]>;
    findOne(id: string): Promise<import("../common/interface/h-medico.interface").IHistorialMedico>;
    update(payload: any): Promise<import("../common/interface/h-medico.interface").IHistorialMedico>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
