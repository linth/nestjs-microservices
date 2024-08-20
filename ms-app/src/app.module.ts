import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { NatsClientModule } from './nats-client/nats-client.module';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'MATH_SERVICE', 
        transport: Transport.TCP 
      },
      {
        name: 'Microservice-1',
        transport: Transport.TCP,
      }, 
      {
        name: 'Microservice-2',
        transport: Transport.TCP,
      }
    ]),
    UsersModule,
    NatsClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
