import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1756833711279 implements MigrationInterface {
    name = 'CreateTableUser1756833711279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userid" BIGSERIAL NOT NULL, "username" character varying NOT NULL, "useremail" character varying NOT NULL, "userpassword" character varying NOT NULL, CONSTRAINT "pk_user" PRIMARY KEY ("userid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
