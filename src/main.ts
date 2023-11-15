import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // Define a Swagger document
  const config = new DocumentBuilder()
  .setTitle('Events-Manger')
  .setDescription('Planing and Hosting Events stress free.')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  // Configure Swagger
  SwaggerModule.setup('api', app, document);
  await app.listen(3999);
}
bootstrap();
