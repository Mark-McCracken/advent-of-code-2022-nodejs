import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Day1Controller } from './day1/day1.controller';
import { Day1Service } from './day1/day1.service';

@Module({
  controllers: [AppController, Day1Controller],
  providers: [Day1Service],
})
export class AppModule {}
