import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn({name: "userid", type: "bigint", primaryKeyConstraintName: "pk_user"})
    userId: number

    @Column({name: "username"})
    userName: string

    @Column({name: "useremail"})
    userEmail: string
    
    @Column({name: "userpassword"})
    userPassword: string
}
