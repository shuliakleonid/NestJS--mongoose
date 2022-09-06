import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TeamsService } from './services/teams.service';
import { TeamsController } from './controllers/teams.controller';
import { TeamsRepositoryService } from './repositories/teams-repository.service';
import { Teams, TeamsSchema } from './models/teams.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Teams.name, schema: TeamsSchema }])],
  controllers: [TeamsController],
  providers: [TeamsService, TeamsRepositoryService],
})
export class TeamsModule {}
