import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagenDto } from './create-personagen.dto';

export class UpdatePersonagenDto extends PartialType(CreatePersonagenDto) {}
