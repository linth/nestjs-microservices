import { Module } from '@nestjs/common';
import { UsersMicroserviceModule } from './users/users.module';

@Module({
  imports: [UsersMicroserviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
