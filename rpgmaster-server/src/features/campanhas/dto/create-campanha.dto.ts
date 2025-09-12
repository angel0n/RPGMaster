import { IsNotEmpty, IsString } from "class-validator";

export class CreateCampanhaDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
}
