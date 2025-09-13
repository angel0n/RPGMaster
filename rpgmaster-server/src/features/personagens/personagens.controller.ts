import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { CreatePersonagenDto } from './dto/create-personagen.dto';
import { UpdatePersonagenDto } from './dto/update-personagen.dto';

@Controller('personagens')
export class PersonagensController {
  constructor(private readonly personagensService: PersonagensService) {}

  @Post()
  create(@Body() createPersonagenDto: CreatePersonagenDto) {
    return this.personagensService.create(createPersonagenDto);
  }

  @Get('campanha/:id')
  findAllByCampanha(@Param('id') id: string) {
    return this.personagensService.findAllByCampanha(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagensService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagensService.remove(+id);
  }
}
