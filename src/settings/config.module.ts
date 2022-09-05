import { Global, Module } from '@nestjs/common';

import { AppSettings, appSettings } from './domain/app-settings';

@Global()
@Module({
  providers: [
    {
      provide: AppSettings.name,
      useFactory: () => appSettings,
    },
  ],
  exports: [AppSettings.name],
})
export class ConfigModule {}
