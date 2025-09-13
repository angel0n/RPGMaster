import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator";
import { Pericia } from "../enum/pericias.enum";

export class CreatePersonagenDto {
    @IsNumber()
    personagemCampanha: number
    @IsString()
    @IsNotEmpty()
    personagemNome: string;
    @IsNumber()
    @IsPositive()
    personagemNivel: number
    @IsString()
    @IsNotEmpty()
    personagemClasse: string;
    @IsString()
    @IsNotEmpty()
    personagemSubClasse: string;
    @IsString()
    @IsNotEmpty()
    personagemRaca: string;
    @IsString()
    @IsNotEmpty()
    personagemSubRaca: string;

    @IsNumber()
    @IsPositive()
    personagemHP: number;
    @IsNumber()
    @IsPositive()
    personagemMP: number;

    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemCarisma: number;
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemConstituicao: number;
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemDestreza: number;
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemForca: number
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemInteligencia: number;
    @IsNumber()
    @IsPositive()
    @Min(0)
    @Max(20)
    personagemSabedoria: number;

    @IsArray()
    @IsEnum(Pericia, {each: true})
    personagemPericias: Pericia[];
}
