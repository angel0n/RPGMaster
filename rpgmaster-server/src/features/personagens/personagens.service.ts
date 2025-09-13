import { Injectable } from '@nestjs/common';
import { CreatePersonagenDto } from './dto/create-personagen.dto';
import { UpdatePersonagenDto } from './dto/update-personagen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from 'src/exceptions/NotFoundException';
import { InvalidSomethingException } from 'src/exceptions/InvalidSomethingException';
import { CampanhasService } from '../campanhas/campanhas.service';

@Injectable()
export class PersonagensService {

  constructor(
    @InjectRepository(Personagem)
    private readonly personagemRepo: Repository<Personagem>,
    private readonly campanhaService: CampanhasService
  ){}

  async create(createPersonagenDto: CreatePersonagenDto) {
    const campanha = await this.campanhaService.findOne(createPersonagenDto.personagemCampanha)
    
    const existPersonagem = await this.personagemRepo.existsBy({ 
      personagemCampanha: { campanhaId: createPersonagenDto.personagemCampanha },
      personagemNome: createPersonagenDto.personagemNome
    })

    if(existPersonagem) throw new InvalidSomethingException("Personagem já criado para essa campanha.")

    const personagem = new Personagem({
      personagemNome: createPersonagenDto.personagemNome,
      personagemClasse: createPersonagenDto.personagemClasse,
      personagemSubClasse: createPersonagenDto.personagemSubClasse,
      personagemRaca: createPersonagenDto.personagemRaca,
      personagemSubRaca: createPersonagenDto.personagemSubRaca,
      personagemNivel: createPersonagenDto.personagemNivel,
      personagemHP:createPersonagenDto.personagemHP,
      personagemMP: createPersonagenDto.personagemMP,
      personagemCarisma: createPersonagenDto.personagemCarisma,
      personagemConstituicao: createPersonagenDto.personagemConstituicao,
      personagemDestreza: createPersonagenDto.personagemDestreza,
      personagemForca: createPersonagenDto.personagemForca,
      personagemInteligencia: createPersonagenDto.personagemInteligencia,
      personagemSabedoria: createPersonagenDto.personagemSabedoria,
      personagemPericias:createPersonagenDto.personagemPericias,
      personagemCampanha: campanha
    })
    
    return await this.personagemRepo.save(personagem);
  }

  async findAllByCampanha(id: number) {
    await this.campanhaService.findOne(id) 
    const personagens = await this.personagemRepo.find({ where: { personagemCampanha: { campanhaId: id } } })
    return personagens;
  }

  async findOne(id: number) {
    const personagem = await this.personagemRepo.findOneBy({personagemId: id})
    if(personagem == null) throw new NotFoundException("Personagem não encontrado.")
    return personagem;
  }

  remove(id: number) {
    return `This action removes a #${id} personagen`;
  }
}
