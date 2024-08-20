import { Controller, Inject, Logger } from '@nestjs/common';
import { UsersMicroserviceService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersMicroserviceController {

	constructor(
		@Inject('UsersLogger')
		private readonly logger: Logger,
		private readonly userMicroService: UsersMicroserviceService,
	) {}

	@MessagePattern({ cmd: 'createUser' })
	createUser(
		@Payload() data: CreateUserDto
	) {
		this.logger.debug(UsersMicroserviceController.name, data);
		return this.userMicroService.createUser(data);
	}
}
