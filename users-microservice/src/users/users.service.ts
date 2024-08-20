import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersMicroserviceService {
	constructor(
		@Inject('UsersLogger')
		private readonly  logger: Logger,
	) {}

	// create a new user or register.
	createUser(createUserDto: CreateUserDto) {
		this.logger.debug(UsersMicroserviceService.name, createUserDto);
		return 'user created.'		
	}

	// TODO: (function) modify user's information.

	// TODO: (function) retrieve all users.

	// TODO: (function) retrieve user by id.
}
