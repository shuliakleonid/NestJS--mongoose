import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teams, TeamsDocument } from '../models/teams.model';

@Injectable()
export class TeamsRepository {
  constructor(@InjectModel(Teams.name) private readonly teamsModel: Model<TeamsDocument>) {}

  async findTeams(): Promise<TeamsDocument[]> {
    return this.teamsModel.find({});
  }
}
