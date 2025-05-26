import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MonitoringService } from '../monitoring.service';

@WebSocketGateway(8080, { cors: true })
export class MonitoringGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private readonly logger = new Logger();
  @WebSocketServer() server: Server;

  constructor(private readonly monitoringService: MonitoringService) {}

  afterInit() {
    this.logger.log('Websocket Initialized');

    // Kirim data setiap 5 menit (5 * 60 * 1000 ms)
    setInterval(
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      async () => {
        try {
          const stats = await this.monitoringService.stats();
          this.server.emit('trafo-stats', stats);
          this.logger.log('Sent stats to all clients');
        } catch (error) {
          this.logger.error('Failed to fetch/send stats', error);
        }
      },
      5 * 60 * 1000,
    ); // 5 menit
  }

  handleConnection(client: Socket) {
    this.logger.log(`User Connected With Id: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`User Disconnected ${client.id}`);
  }

  @SubscribeMessage('get-stats')
  async sendStatsEvent() {
    const stats = await this.monitoringService.stats();

    this.server.emit('trafo-stats', stats);
  }
}
