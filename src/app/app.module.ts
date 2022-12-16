import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Day1Controller } from './day1/day1.controller';
import { Day1Service } from './day1/day1.service';
import { Day2Controller } from './day2/day2.controller';
import { Day2Service } from './day2/day2.service';

@Module({
  controllers: [AppController, Day1Controller, Day2Controller],
  providers: [Day1Service, Day2Service],
})
export class AppModule {}
