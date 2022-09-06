import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsController } from './controllers/teams.controller';
import { Teams, TeamsSchema } from './models/teams.model';
import { TeamsRepository } from './repositories/teams.repository';
import { TeamsService } from './services/teams.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Teams.name, schema: TeamsSchema }])],
  controllers: [TeamsController],
  providers: [TeamsService, TeamsRepository],
})
export class TeamsModule {}
