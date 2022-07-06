import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UserEntity } from './entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  /*app.use((req: UserEntity, res: Response, next) => {
    console.log('Middleware');
    next()
  });*/
  await app.listen(8000);
}
bootstrap();