/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/* eslint-disable prettier/prettier */
export enum RabbitMQ {
    HistorialmQueue = 'historal_medicos',
  }
  
  export enum HistorialMedicoMsg {
    CREATE = 'CREATE_H_MEDICO',
    FIND_ALL = 'FIND_H_MEDICOS',
    FIND_ONE = 'FIND_H_MEDICO',
    UPDATE = 'UPDATE_H_MEDICO',
    DELETE = 'DELETE_H_MEDICO',
  }
  