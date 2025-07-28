import { Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Project } from '../domain/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from '../presentation/dtos/create-project.dto';
import { QueryProjectsDto } from '../presentation/dtos/query-projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly repo: Repository<Project>,
  ) {}

  async create(data: CreateProjectDto): Promise<Project> {
    const project = this.repo.create(data);
    return this.repo.save(project);
  }

  async findAll(query: QueryProjectsDto): Promise<Project[]> {
    const where = query.name ? { name: ILike(`%${query.name}%`) } : {};
    return this.repo.find({ where, order: { createdAt: 'DESC' } });
  }

  async findByName(name: string): Promise<Project[]> {
    return this.repo.find({
      where: { name: ILike(`%${name}%`) },
      order: { createdAt: 'DESC' },
    });
  }
}
