import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private isConnected = false;
  private connectedUserType: string = '';


  private _users$ = new BehaviorSubject<UserType[]>([
    {
      name: 'Medico',
      slogan: 'Roberto Ortiz',
      avatar: 'https://cdn.worldvectorlogo.com/logos/medicina-general.svg',
      id: 'Medico',
    },
    {
      name: 'Paciente',
      slogan: 'Juilio Casanova',
      avatar:
        'https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg?w=740',
      id: 'Paciente',
    },
    
  ]);
  public users$ = this._users$.asObservable();

  private _chat$ = new BehaviorSubject<ChatType[]>([]);
  public chat$ = this._chat$.asObservable();

  private _room$ = new BehaviorSubject<string | null>(null);

  constructor(private socket: Socket) {
    socket.fromEvent('new_message').subscribe((message: any) => {
      const chatObject: ChatType = {
        user: {
          avatar: '',
          name: 'Anonymus',
          id: '0',
          slogan: '',
        },
        message,
      };
      this.setChat(chatObject);
    });

    socket.fromEvent('disconnect').subscribe(() => {
      const lastRoom = this._room$.getValue();
      if (lastRoom) this.joinRoom(lastRoom);
    });
  }

  public setUser(user: UserType, room: string): void {
    if (!this.isConnected) {
      const current = this._users$.getValue();
      const existingUser = current.find((u) => u.id === user.id);

      if (!existingUser) {
        const state = [...current, user];
        this._users$.next(state);
        this.isConnected = true;
        this.connectedUserType = user.id; // Almacena el tipo de usuario conectado
        this.socket.emit('set_client_type', { clientType: user.id, room });
      } else {
        console.warn('Ya estás conectado con un usuario. No se permite una segunda conexión.');
      }
    } else {
      console.warn('Ya estás conectado con un usuario. No se permite una segunda conexión.');
    }
  }


  public setChat(message: ChatType): void {
    const current = this._chat$.getValue();
    const state = [...current, message];
    this._chat$.next(state);
  }

  public initChat(): void {
    this._chat$.next([]);
  }

  //TODO Enviar mensaje desde el FRONT-> BACKEND
  sendMessage(payload: { message: string, room?:string }) {
    const roomCurrent = this._room$.getValue();//TODO: js, ts, node
    if (roomCurrent) {
      payload = { ...payload, room: roomCurrent };
      console.log(payload);
      this.socket.emit('event_message', payload); //TODO FRONT
    }
  }

  joinRoom(room: string): void {
    this._room$.next(room);
    this.socket.emit('event_join', room);
  }

  leaveRoom(): void {
    const room = this._room$.getValue();
    this.socket.emit('event_leave', room);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }
}

interface UserType {
  name: string;
  avatar: string;
  slogan: string;
  id: string;
}

interface ChatType {
  user: UserType;
  message: string;
}


