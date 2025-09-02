import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
    private readonly saltRounds = 10;

    constructor(private readonly jwtService: JwtService) { }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return bcrypt.hash(password, salt);
    }

    async comparePasswords(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    async createToken(user: User) {
        const payload = { id: user.userId, nome: user.userName };
        return await this.jwtService.signAsync(payload)
    }
}
