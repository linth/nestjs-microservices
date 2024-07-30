import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AppController {
    private readonly appService;
    private client;
    constructor(appService: AppService, client: ClientProxy);
    getHello(): string;
    wordCount({ text }: {
        text: string;
    }): Observable<{
        [key: string]: number;
    }>;
}
