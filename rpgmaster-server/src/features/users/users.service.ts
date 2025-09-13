import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InvalidSomethingException } from 'src/exceptions/InvalidSomethingException';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { NotFoundException } from 'src/exceptions/NotFoundException';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly authService: AuthService
  ) { }

  async create(createUserDto: CreateUserDto) {
    this.validarPassword(createUserDto.userPassword, createUserDto.userPasswordConfirm);

    const existEmail = await this.userRepo.existsBy({ userEmail: createUserDto.userEmail })
    if (existEmail) throw new InvalidSomethingException(`O E-mail ${createUserDto.userEmail} já está sendo usado.`);

    const criptoPassword = await this.authService.hashPassword(createUserDto.userPassword)

    const user = await this.userRepo.save(new User(createUserDto.userName, createUserDto.userEmail, criptoPassword))
    user.userPassword = "";

    return user;
  }


  async login(loginDto: LoginDto) {
    const user = await this.userRepo.findOne({select: { userPassword: true, userId: true, userName: true }, where: {userEmail: loginDto.email}})
    if(user == null) throw new NotFoundException("Usuario não localizado.")
    
    const correctPassword = await this.authService.comparePasswords(loginDto.password,user.userPassword);
    if(!correctPassword) throw new UnauthorizedException("Senha incorreta.")
    
    const token = await this.authService.createToken(user)

    return {token};
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.validarPassword(updateUserDto.userPassword, updateUserDto.userPasswordConfirm)

    const user = await this.userRepo.findOneBy({userId: id})
    if(user == null) throw new NotFoundException("Usuario não encontrado.")

    user.userPassword = await this.authService.hashPassword(user.userPassword)
    this.userRepo.save(user)

    return;
  }

  private validarPassword(userPassword: string, userPasswordConfirm: string){
    if (userPassword !== userPasswordConfirm) throw new InvalidSomethingException("As senhas não são iguais.");
    if (userPassword.length < 8) throw new InvalidSomethingException("A senha é muito curtar, no minimo 8 caracteres.");
    if (!/[A-Z]/.test(userPassword)) throw new InvalidSomethingException("A senha precisa ter uma letra maiuscula.");
    if (!/[a-z]/.test(userPassword)) throw new InvalidSomethingException("A senha precisa ter uma letra minuscula.");
    if (!/[0-9]/.test(userPassword)) throw new InvalidSomethingException("A senha precisa ter um número.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) throw new InvalidSomethingException("A senha precisa conter um caracter especial.");
  }

}
