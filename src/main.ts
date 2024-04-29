import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Esto es para que funcione el class-validator y el class-transofmation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //Configuro el CORS para todos los dominios, para que puedan hacer petiicones cross domain
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
