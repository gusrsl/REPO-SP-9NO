import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const activeSockets = {}; // Objeto para llevar un registro de los IDs de socket activos y su correspondiente usuario


@WebSocketGateway(81, {
  cors: { origin: '*' },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private connectedClients: { [type: string]: string } = {};
  private roomOccupied: { [room: string]: string } = {};


  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conectó al socket 👌👌👌');
    
    // Recibe el tipo de cliente y la sala desde el frontend
    client.on('set_client_type', (data: { clientType: string, room: string }) => {
      const { clientType, room } = data;

      if (!this.roomOccupied[room] || this.roomOccupied[room] === clientType) {
        // La sala está libre o el tipo de cliente coincide, permite la conexión
        const clientId = client.id;
        this.connectedClients[clientType] = clientId;
        this.roomOccupied[room] = clientType;
        console.log(`Cliente de tipo ${clientType} conectado con ID: ${clientId} en la sala ${room}`);
      } else {
        // El tipo de cliente no coincide, emite un evento de rechazo
        client.emit('duplicate_client_type', 'Ya hay un cliente de este tipo conectado en la sala.');
        client.disconnect(true); // Desconectar al nuevo cliente
      }
    });
  }

  handleDisconnect(client: any) {
    const clientId = client.id;

    // Elimina el cliente del registro de clientes conectados
    for (const type in this.connectedClients) {
      if (this.connectedClients[type] === clientId) {
        delete this.connectedClients[type];
        console.log(`El cliente de tipo ${type} con ID ${clientId} se desconectó.`);
        break;
      }
    }
  }


  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log(payload)
    this.server.to(`room_${room}`).emit('new_message',message);
  }

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room:string) {
    console.log(`chao room_${room}`)
    client.leave(`room_${room}`);
  }

}
