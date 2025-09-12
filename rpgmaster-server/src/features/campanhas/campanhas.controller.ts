import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampanhasService } from './campanhas.service';
import { CreateCampanhaDto } from './dto/create-campanha.dto';
import { UpdateCampanhaDto } from './dto/update-campanha.dto';
import { UserLogado } from 'src/decorators/userLogado.decorator';
import { User } from '../users/entities/user.entity';

@Controller('campanhas')
export class CampanhasController {
  constructor(private readonly campanhasService: CampanhasService) {}

  @Post()
  create(@Body() createCampanhaDto: CreateCampanhaDto, @UserLogado() user: User) {
    return this.campanhasService.create(createCampanhaDto, user);
  }

  @Get()
  findAllByUser(@UserLogado() user: User) {
    return this.campanhasService.findAllByUser(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campanhasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.campanhasService.remove(+id);
  }
}
