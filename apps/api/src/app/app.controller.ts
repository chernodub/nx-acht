import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Article } from '@acht/api-interfaces';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('articles')
  getData(): Observable<Article[]> {
    return this.appService.getData();
  }
}
