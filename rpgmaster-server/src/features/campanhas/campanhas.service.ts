import { Injectable } from '@nestjs/common';
import { CreateCampanhaDto } from './dto/create-campanha.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Campanha } from './entities/campanha.entity';
import { Repository } from 'typeorm';
import { InvalidSomethingException } from 'src/exceptions/InvalidSomethingException';
import { InternalServerErrorException } from 'src/exceptions/InternalServerErrorException';
import { NotFoundException } from 'src/exceptions/NotFoundException';

@Injectable()
export class CampanhasService {

  constructor(
    @InjectRepository(Campanha)
    private readonly campanhaRepository: Repository<Campanha>,
  ){}

  async create(createCampanhaDto: CreateCampanhaDto, user: User) {
    const exist = await this.campanhaRepository.exists({
      where: {
        campanhaTitulo: createCampanhaDto.titulo,
        campanhaUser: { userId: user.userId }
      }
    }) 

    if(exist) throw new InvalidSomethingException(`A campanha ${createCampanhaDto.titulo} já existe para esse usuário.`);

    const campanha = this.campanhaRepository.save(new Campanha(createCampanhaDto.titulo, user));
    return campanha;
  }

  async findAllByUser(user: User) {
    return await this.campanhaRepository.findBy({ campanhaUser: { userId: user.userId } });
  }

  async findOne(id: number) {
    const exist = await this.campanhaRepository.exists({ where: { campanhaId: id } });
    if(!exist) throw new NotFoundException(`A campanha procurada não existe.`);
    return await this.campanhaRepository.findOne({ relations: { campanhaUser: true } , where: { campanhaId: id } });
  }

  async remove(id: number) {
    const exist = await this.campanhaRepository.exists({ where: { campanhaId: id } });
    if(!exist) throw new InvalidSomethingException(`A campanha procurada não existe.`);
    
    const result = await this.campanhaRepository.delete(id);
    if(result.affected === 0){
      throw new InternalServerErrorException(`Não foi possível deletar a campanha.`);
    }
  }
}
