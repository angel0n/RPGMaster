import { Campanha } from "../../campanhas/entities/campanha.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn({name: "userid", type: "bigint", primaryKeyConstraintName: "pk_user"})
    userId: number

    @Column({name: "username"})
    userName: string

    @Column({name: "useremail"})
    userEmail: string
    
    @Column({name: "userpassword", select: false})
    userPassword: string

    @OneToMany(() => Campanha, (campanha) => campanha.campanhaUser)
    campanhas: Campanha[]

    constructor(userName?: string, userEmail?: string, userPassword?: string) {
        if(userName) this.userName = userName;
        if(userEmail) this.userEmail = userEmail;
        if(userPassword) this.userPassword = userPassword;
    }
}
