import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    userName: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    userEmail: string

    @IsString()
    @IsNotEmpty()
    userPassword: string

    @IsString()
    @IsNotEmpty()
    userPasswordConfirm: string
}
