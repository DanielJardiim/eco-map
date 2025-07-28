import { ApiTags } from '@nestjs/swagger';
import { ProjectsService } from '../application/projects.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { Project } from '../domain/project.entity';
import { QueryProjectsDto } from './dtos/query-projects.dto';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  @Post()
  create(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.service.create(dto);
  }

  @Get()
  findAll(@Query() query: QueryProjectsDto): Promise<Project[]> {
    return this.service.findAll(query);
  }

  @Get('search')
  searchByName(@Query('name') name: string): Promise<Project[]> {
    return this.service.findByName(name);
  }
}
