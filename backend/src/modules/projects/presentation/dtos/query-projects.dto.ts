import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class QueryProjectsDto {
  @ApiPropertyOptional({
    description: 'Filtra pelo nome (contém, case-insensitive)',
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;
}
