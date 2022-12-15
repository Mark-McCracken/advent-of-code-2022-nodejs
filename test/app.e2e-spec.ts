import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/healthcheck (GET)', () => {
    return request(app.getHttpServer())
      .get('/healthcheck')
      .expect(200)
      .expect('ok');
  });

  it(`/day1/solve (POST)`, () => {
    return request(app.getHttpServer())
      .post('/day1/solve')
      .set('Content-Type', 'multipart/form-data')
      .attach('file', 'src/app/day1/sample.txt')
      .expect(201)
      .expect((res) => {
        expect(res.body.answer.part1).toBe(24000);
        expect(res.body.answer.part2).toBe(45000);
      });
  });
});
