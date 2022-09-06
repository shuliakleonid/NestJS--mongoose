import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Teams } from '../models/teams.model';
import { TeamsService } from './../services/teams.service';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOkResponse({ type: Teams })
  async getTeams() {
    return this.teamsService.getTeams();
  }
}
