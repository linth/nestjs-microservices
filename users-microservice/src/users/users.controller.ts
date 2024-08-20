import { Controller } from '@nestjs/common';
import { UsersMicroserviceService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersMicroserviceController {

	constructor(
		private readonly userMicroService: UsersMicroserviceService,
	) {}

	@MessagePattern({ cmd: 'createUser' })
	createUser(
		@Payload() data: CreateUserDto
	) {
		console.log('data', data);
		return this.userMicroService.createUser(data);
	}
}
