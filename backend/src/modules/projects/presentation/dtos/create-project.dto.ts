import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Geometry } from 'geojson';
import { ProjectStatus } from '../../domain/project-status.enum';

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: ProjectStatus })
  @IsEnum(ProjectStatus)
  status: ProjectStatus;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  responsibleResearcher: string;

  @ApiProperty({ type: Object, description: 'GeoJSON geometry' })
  @IsObject()
  geometry: Geometry;
}
