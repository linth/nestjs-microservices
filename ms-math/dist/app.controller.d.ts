import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    wordCount(text: string): {
        [key: string]: number;
    };
    wordCountLog(text: string): void;
}
