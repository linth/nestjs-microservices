import { Logger, Module } from '@nestjs/common';
import { UsersMicroserviceService } from './users.service';
import { UsersMicroserviceController } from './users.controller';


@Module({
  controllers: [UsersMicroserviceController],
  providers: [
    UsersMicroserviceService,
    {
      provide: 'UsersLogger',
      useFactory: () => {
        return new Logger('Users');
      }
    }
  ]
})
export class UsersMicroserviceModule {}
