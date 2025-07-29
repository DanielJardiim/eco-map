import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectStatus } from './project-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Geometry } from 'geojson';

@Entity('projects')
export class Project {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ enum: ProjectStatus })
  @Column({ type: 'enum', enum: ProjectStatus })
  status: ProjectStatus;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  responsibleResearcher: string;

  @ApiProperty({ description: 'GeoJSON geometry' })
  @Column({ type: 'jsonb' })
  geometry: Geometry;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
