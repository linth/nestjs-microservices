import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

class TwoNumber {
  a: number;
  b: number;
}


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MATH_SERVICE') 
    private client: ClientProxy
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('/math/wordcount')
  wordCount(@Body() { text }: { text: string }): Observable<{ [key: string]: number }> {
    this.client.emit('math:wordcount_log', text)
    return this.client.send('math:wordcount', text);
  }

  @Get()
  addTwoNumber(@Body() twoNumber: TwoNumber) {
    console.log('進入addTwoNumber function.');
    
    console.log('twoNumber', twoNumber);
    this.client.emit('two number', twoNumber);

    console.log('結束addTwoNumber function.');
    return 'successful';
  }
}
