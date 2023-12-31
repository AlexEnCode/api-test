import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appConfig(app);
  initSwagger(app);
  await app.listen(3000);
}

function appConfig(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}

function initSwagger(app: INestApplication) {
  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder().build(),
    ),
  );
}
bootstrap();