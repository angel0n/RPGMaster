import { Module } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { PersonagensController } from './personagens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';
import { CampanhasModule } from '../campanhas/campanhas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Personagem]), CampanhasModule],
  controllers: [PersonagensController],
  providers: [PersonagensService],
})
export class PersonagensModule {}
