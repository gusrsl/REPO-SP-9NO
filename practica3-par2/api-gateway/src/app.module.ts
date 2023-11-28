/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { MedicoModule } from './medico/medico.module';
import { HistorialMModule } from './historial-m/historial-m.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FlightModule,
    AuthModule,
    StudentModule,
    MedicoModule,
    HistorialMModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
