import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersMicroserviceService {
	constructor() {}

	// create a new user.
	createUser(createUserDto: CreateUserDto) {
		console.log('call createUser function.', createUserDto);
		return 'user created.'		
	}
}
