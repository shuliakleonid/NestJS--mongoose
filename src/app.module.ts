import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appSettings, AppSettings } from './settings/domain/app-settings';
import { MongoModule } from './db/mongo/mongo.module';

@Module({
  imports: [
    MongoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: AppSettings.name,
      useFactory: () => appSettings,
    },
  ],
})
export class AppModule {}
