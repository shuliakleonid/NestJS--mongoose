import { TeamsRepositoryService } from './../repositories/teams-repository.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(private readonly teamsRepositoryService: TeamsRepositoryService) {}

  async getTeams() {
    return this.teamsRepositoryService.findTeams();
  }
}
