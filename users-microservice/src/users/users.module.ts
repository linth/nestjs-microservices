import { Module } from '@nestjs/common';
import { UsersMicroserviceService } from './users.service';
import { UsersMicroserviceController } from './users.controller';


@Module({
  controllers: [UsersMicroserviceController],
  providers: [UsersMicroserviceService]
})
export class UsersMicroserviceModule {}
