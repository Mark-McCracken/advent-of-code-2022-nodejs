import { start as startTrace } from '@google-cloud/trace-agent';
import { start as startDebug } from '@google-cloud/debug-agent';
import { start as startProfiler } from '@google-cloud/profiler';
export let tracer;
if (process.env.NODE_ENV === 'production') {
  tracer = startTrace();
  startDebug({ allowExpressions: true, capture: { maxProperties: 25 } });
  startProfiler();
} else {
  tracer = {
    createChildSpan: function (object: { name: string }) {
      return undefined; // do nothing.
    },
  };
}
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { AppModule } from './app/app.module';
import { logger } from './logger';

export async function startServer(
  port: number = +(process.env.PORT || '8080'),
  testing = false,
) {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  if (!testing) {
    app.use(morgan('common'));
    const options = new DocumentBuilder()
      .setTitle('Advent of Code 2022 node.js')
      .setDescription("Endpoints to solve 2022's advent of code challenges")
      .setVersion('1')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apidocs', app, document);
  }
  await app.listen(port);
  console.info(`Server running on port ${port}`);
  return app;
}
