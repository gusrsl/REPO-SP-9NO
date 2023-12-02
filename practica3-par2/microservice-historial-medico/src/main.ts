/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.HistorialmQueue,
    },
  });
  await app.listen();
  console.log('Microservice HISTORIAL-MEDICO is listening');
}
bootstrap();