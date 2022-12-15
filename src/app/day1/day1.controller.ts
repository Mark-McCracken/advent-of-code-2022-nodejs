import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from '../util/FileUploadDto';
import { Express } from 'express';
import { Day1Service } from './day1.service';
import { Day1Response } from './Day1Response';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

@ApiTags('Day 1')
@Controller('day1')
export class Day1Controller {
  constructor(private service: Day1Service) {}

  @Get(`problem`)
  async getProblem(): Promise<string> {
    return String(await readFile(resolve(__dirname, 'problem.txt')));
  }

  @Post(`solve`)
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: 'The input for day 1', type: FileUploadDto })
  @ApiResponse({ description: 'The answer for day 1', type: Day1Response })
  @UseInterceptors(FileInterceptor('file'))
  uploadInput(@UploadedFile() file: Express.Multer.File): Day1Response {
    const fileContents = file.buffer.toString();
    const results = this.service.solve(fileContents);
    return results;
  }
}
