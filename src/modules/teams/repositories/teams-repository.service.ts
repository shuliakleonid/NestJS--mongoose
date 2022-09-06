import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teams, TeamsModel } from '../models/teams.model';

@Injectable()
export class TeamsRepositoryService {
  constructor(@InjectModel(Teams.name) private readonly teamsModel: Model<TeamsModel>) {}

  async findTeams(): Promise<TeamsModel[]> {
    return this.teamsModel.find({});
  }
}
