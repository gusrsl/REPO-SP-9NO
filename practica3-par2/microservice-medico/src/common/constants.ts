/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
/* eslint-disable prettier/prettier */
export enum RabbitMQ {
    MedicoQueue = 'medicos',
  }
  
  export enum MedicoMsg {
    CREATE = 'CREATE_MEDICO',
    FIND_ALL = 'FIND_MEDICOS',
    FIND_ONE = 'FIND_MEDICO',
    UPDATE = 'UPDATE_MEDICO',
    DELETE = 'DELETE_MEDICO',
  }
  