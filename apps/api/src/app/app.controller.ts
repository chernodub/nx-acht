import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Letter } from '@acht/api-interfaces';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('letters')
  getData(): Observable<Letter[]> {
    return this.appService.getData();
  }
}
