import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // 원하는 실제 타입으로 변경, Controller - Param 등
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
