import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { InvalidSomethingExceptionFilter } from './exceptions/filters/InvalidSomethingExceptionFilter';
import { NotFoundExceptionFilter } from './exceptions/filters/NotFoundExceptionFilter';
import { UnauthorizedExceptionFilter } from './exceptions/filters/UnauthorizedExceptionFilter';
import { ValidationPipe } from '@nestjs/common';
import { InternalServerErrorExceptionFilter } from './exceptions/filters/InternalServerErrorExceptionFilter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new InvalidSomethingExceptionFilter(),
    new NotFoundExceptionFilter(),
    new UnauthorizedExceptionFilter(),
    new InternalServerErrorExceptionFilter()
  )

  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode: 422}))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
