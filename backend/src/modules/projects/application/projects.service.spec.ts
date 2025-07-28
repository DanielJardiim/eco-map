import { ObjectLiteral, Repository } from 'typeorm';
import { ProjectsService } from './projects.service';
import { Project } from '../domain/project.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProjectStatus } from '../domain/project-status.enum';

type MockRepo<T extends ObjectLiteral = any> = Partial<
  Record<keyof Repository<T>, jest.Mock>
>;

const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
});

describe('ProjectsService', () => {
  let service: ProjectsService;
  let repo: MockRepo<Project>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: getRepositoryToken(Project),
          useValue: createMockRepo(),
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    repo = module.get(getRepositoryToken(Project));
  });

  it('should create a project', async () => {
    const dto = {
      name: 'Projeto 1',
      status: ProjectStatus.ACTIVE,
      responsibleResearcher: 'Dr. X',
      geometry: {
        type: 'MultiPolygon' as const,
        coordinates: [
          [
            [
              [0, 0],
              [1, 0],
              [1, 1],
              [0, 1],
              [0, 0],
            ],
          ],
          [
            [
              [2, 2],
              [3, 2],
              [3, 3],
              [2, 3],
              [2, 2],
            ],
          ],
        ],
      },
    };

    const created = { ...dto, id: 'uuid', createdAt: new Date() } as Project;

    repo.create?.mockReturnValue(created);
    repo.save?.mockResolvedValue(created);

    const result = await service.create(dto);
    expect(repo.create).toHaveBeenCalledWith(dto);
    expect(repo.save).toHaveBeenCalledWith(created);
    expect(result).toEqual(created);
  });

  it('should list projects (findAll)', async () => {
    const projects = [
      { id: '1', name: 'Teste', createdAt: new Date() } as Project,
    ];
    repo.find?.mockResolvedValue(projects);

    const result = await service.findAll({});
    expect(repo.find).toHaveBeenCalled();
    expect(result).toEqual(projects);
  });
});
