//базовые настройки env переменных
//по умолчанию переменные берутся сначала из ENV илм смотрят всегда на staging
//для подстановки локальных значений переменных использовать исключительно локальные env файлы env.development.local
//при необходимости добавляем сюда нужные приложению переменные
export type EnvironmentVariable = { [key: string]: string | undefined };
export type EnvironmentsTypes = 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION' | 'TEST';

export class EnvironmentSettings {
  constructor(private environment: EnvironmentsTypes) {}

  getEnv() {
    return this.environment;
  }

  isProduction() {
    return this.environment === 'PRODUCTION';
  }

  isStaging() {
    return this.environment === 'STAGING';
  }

  isDevelopment() {
    return this.environment === 'DEVELOPMENT';
  }

  isTesting() {
    return this.environment === 'TEST';
  }
}

export class APISettings {
  public readonly PORT: number;

  constructor(private environmentVariables: EnvironmentVariable) {
    this.PORT = Number.parseInt(environmentVariables.PORT || '5001');
  }
}

export class DatabaseSettings {
  public readonly MONGODB_URL: string;

  constructor(private environmentVariables: EnvironmentVariable) {
    this.MONGODB_URL =
      environmentVariables.MONGODB_URL ||
      // eslint-disable-next-line no-secrets/no-secrets
      'mongodb+srv://Zeleny:Zeleny3416240@cluster0.gt3qw.mongodb.net/?retryWrites=true&w=majority';
  }
}

const environment = new EnvironmentSettings(
  (process.env.ENV || 'DEVELOPMENT') as EnvironmentsTypes,
);

export class AppSettings {
  constructor(
    public environment: EnvironmentSettings,
    public api: APISettings,
    public database: DatabaseSettings,
  ) {}
}

const api = new APISettings(process.env);
const database = new DatabaseSettings(process.env);

export const appSettings = new AppSettings(environment, api, database);
