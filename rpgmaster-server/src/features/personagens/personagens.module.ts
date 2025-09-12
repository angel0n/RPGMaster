import { Module } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { PersonagensController } from './personagens.controller';

@Module({
  controllers: [PersonagensController],
  providers: [PersonagensService],
})
export class PersonagensModule {}
