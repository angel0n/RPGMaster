import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePersonagem1757705320671 implements MigrationInterface {
    name = 'CreateTablePersonagem1757705320671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personagens" ("personagemid" BIGSERIAL NOT NULL, "personagemnome" character varying NOT NULL, "personagemnivel" integer NOT NULL, "personagemclasse" character varying NOT NULL, "personagemsubclasse" character varying NOT NULL, "personagemraca" character varying NOT NULL, "personagemsubraca" character varying NOT NULL, "personagemhp" integer NOT NULL, "personagemmp" integer NOT NULL, "personagemcarisma" integer NOT NULL, "personagemconstituicao" integer NOT NULL, "personagemdestreza" integer NOT NULL, "personagemforca" integer NOT NULL, "personageminteligencia" integer NOT NULL, "personagemsabedoria" integer NOT NULL, "personagempericias" text DEFAULT '[]', "personagemcampanha" bigint NOT NULL, CONSTRAINT "pk_personagem" PRIMARY KEY ("personagemid"))`);
        await queryRunner.query(`ALTER TABLE "personagens" ADD CONSTRAINT "fk_personagem_campanha" FOREIGN KEY ("personagemcampanha") REFERENCES "campanhas"("campanhaid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personagens" DROP CONSTRAINT "fk_personagem_campanha"`);
        await queryRunner.query(`DROP TABLE "personagens"`);
    }

}
