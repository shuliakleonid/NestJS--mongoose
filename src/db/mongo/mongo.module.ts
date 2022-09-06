import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appSettings } from '../../settings/domain/app-settings';

@Module({
  imports: [MongooseModule.forRoot(appSettings.database.MONGODB_URL + 'teams')],
  providers: [],
  exports: [],
})
export class MongoModule {}
