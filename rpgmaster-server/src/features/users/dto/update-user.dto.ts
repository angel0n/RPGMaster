import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    userPassword: string

    @IsString()
    @IsNotEmpty()
    userPasswordConfirm: string
}
