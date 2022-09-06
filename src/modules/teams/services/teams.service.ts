import { Injectable } from '@nestjs/common';
import { TeamsDocument } from '../models/teams.model';
import { TeamsRepository } from '../repositories/teams.repository';

@Injectable()
export class TeamsService {
  constructor(private readonly teamsRepositoryService: TeamsRepository) {}

  async getTeams(): Promise<TeamsDocument[]> {
    return this.teamsRepositoryService.findTeams();
  }
}
