import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCampanha1757510612557 implements MigrationInterface {
    name = 'CreateTableCampanha1757510612557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "campanhas" ("campanhaid" BIGSERIAL NOT NULL, "campanhatitulo" character varying(100) NOT NULL, "campanhauser" bigint NOT NULL, CONSTRAINT "pk_campanha" PRIMARY KEY ("campanhaid"))`);
        await queryRunner.query(`ALTER TABLE "campanhas" ADD CONSTRAINT "fk_campanha_user" FOREIGN KEY ("campanhauser") REFERENCES "users"("userid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campanhas" DROP CONSTRAINT "fk_campanha_user"`);
        await queryRunner.query(`DROP TABLE "campanhas"`);
    }

}
