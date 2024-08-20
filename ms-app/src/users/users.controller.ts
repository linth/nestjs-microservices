import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
	constructor(
		@Inject('NATS_SERVICE')
		private natsClient: ClientProxy,
	) {}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto) {
		console.log('createUserDto', createUserDto);
		
		// Request-Response message.
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
		// Pub-Sub message.
		// this.natsClient.emit({ cmd: 'createUser' }, createUserDto);
  }
}
