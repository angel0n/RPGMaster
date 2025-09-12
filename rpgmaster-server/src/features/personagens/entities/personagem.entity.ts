import { Campanha } from "../../campanhas/entities/campanha.entity";
import { Pericia } from "../enum/pericias.enum";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("personagens")
export class Personagem {
    @PrimaryGeneratedColumn({name: "personagemid", type: "bigint", primaryKeyConstraintName: "pk_personagem"})
    personagemId: number;
    @Column({name: "personagemnome", nullable: false})
    personagemNome: string;
    @Column({name: "personagemnivel", nullable: false})
    personagemNivel: number
    @Column({name: "personagemclasse", nullable: false})
    personagemClasse: string;
    @Column({name: "personagemsubclasse", nullable: false})
    personagemSubClasse: string;
    @Column({name: "personagemraca", nullable: false})
    personagemRaca: string;
    @Column({name: "personagemsubraca", nullable: false})
    personagemSubRaca: string;

    @Column({name: "personagemhp", nullable: false})
    personagemHP: number;
    @Column({name: "personagemmp", nullable: false})
    personagemMP: number;

    @Column({name: "personagemcarisma", nullable: false})
    personagemCarisma: number;
    @Column({name: "personagemconstituicao", nullable: false})
    personagemConstituicao: number;
    @Column({name: "personagemdestreza", nullable: false})
    personagemDestreza: number;
    @Column({name: "personagemforca", nullable: false})
    personagemForca: number
    @Column({name: "personageminteligencia", nullable: false})
    personagemInteligencia: number;
    @Column({name: "personagemsabedoria", nullable: false})
    personagemSabedoria: number;

    @Column({name: "personagempericias", nullable: true, default:[], type: "simple-array"})
    personagemPericias: Pericia[];

    @ManyToOne(() => Campanha, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: "personagemcampanha", referencedColumnName: "campanhaId", foreignKeyConstraintName: "fk_personagem_campanha"})
    personagemCampanha: Campanha
}
