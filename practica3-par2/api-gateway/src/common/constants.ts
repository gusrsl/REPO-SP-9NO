/* eslint-disable prettier/prettier */
export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  FlightQueue = 'flights',
  StudentQueue = 'students',
  MedicoQueue = 'medicos',
  HistorialmQueue = 'historal_medicos',

}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}

export enum StudentMSG {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
  VALID_USER = 'VALID_STUDENT',
}


export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGER',
  DELETE = 'DELETE_PASSENGER',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_FLIGHT',
  UPDATE = 'UPDATE_FLIGHT',
  DELETE = 'DELETE_FLIGHT',
  ADD_PASSENGER = 'ADD_PASSENGER',
}

export enum MedicoMSG {
  CREATE = 'CREATE_MEDICO',
  FIND_ALL = 'FIND_MEDICOS',
  FIND_ONE = 'FIND_MEDICO',
  UPDATE = 'UPDATE_MEDICO',
  DELETE = 'DELETE_MEDICO',
}

export enum HistorialMedicoMSG {
  CREATE = 'CREATE_H_MEDICO',
  FIND_ALL = 'FIND_H_MEDICOS',
  FIND_ONE = 'FIND_H_MEDICO',
  UPDATE = 'UPDATE_H_MEDICO',
  DELETE = 'DELETE_H_MEDICO',
}

