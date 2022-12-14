import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { appSettings } from './settings/domain/app-settings';
import { AppModule } from './app.module';

const PORT = appSettings.api.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Trainee platform')
    .setDescription('The trainee platform API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(5001, () => {
    console.log('Server started on PORT:', PORT);
    console.log('ENV', appSettings.environment.getEnv());
  });
}
bootstrap();
