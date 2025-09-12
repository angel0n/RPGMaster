import { Personagem } from "../../personagens/entities/personagem.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("campanhas")
export class Campanha {
    @PrimaryGeneratedColumn({name: "campanhaid", type: "bigint", primaryKeyConstraintName: "pk_campanha"})
    campanhaId: number;

    @Column({name: "campanhatitulo", type: "varchar", length: 100, nullable: false})
    campanhaTitulo: string;

    @ManyToOne(() => User, (user) => user.campanhas, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: "campanhauser", referencedColumnName: "userId", foreignKeyConstraintName: "fk_campanha_user"})
    campanhaUser: User;

    @OneToMany(() => Personagem, (personagem) => personagem.personagemCampanha)
    campanhaPersonagens: Personagem[];

    constructor(titulo?: string, user?: User) {
        if(titulo) this.campanhaTitulo = titulo;
        if(user) this.campanhaUser = user;
    }
}
