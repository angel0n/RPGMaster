import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("campanhas")
export class Campanha {
    @PrimaryGeneratedColumn({name: "campanhaid", type: "bigint", primaryKeyConstraintName: "pk_campanha"})
    campanhaId: number;

    @Column({name: "campanhatitulo", type: "varchar", length: 100, nullable: false})
    campanhaTitulo: string;

    @ManyToOne(() => User, (user) => user.campanhas, {nullable: false, onDelete: "CASCADE"})
    @JoinColumn({name: "campanhauser", referencedColumnName: "userId", foreignKeyConstraintName: "fk_campanha_user"})
    campanhaUser: User;

    constructor(titulo?: string, user?: User) {
        if(titulo) this.campanhaTitulo = titulo;
        if(user) this.campanhaUser = user;
    }
}
