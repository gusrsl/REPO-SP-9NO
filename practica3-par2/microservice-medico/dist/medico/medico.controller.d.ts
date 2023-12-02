import { MedicoDTO } from './dto/medico.dto';
import { MedicoService } from './medico.service';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    create(MedicoDTO: MedicoDTO): Promise<import("../common/interface/medico.interface").IMedico>;
    findAll(): Promise<import("../common/interface/medico.interface").IMedico[]>;
    findOne(id: string): Promise<import("../common/interface/medico.interface").IMedico>;
    update(payload: any): Promise<import("../common/interface/medico.interface").IMedico>;
    delete(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
