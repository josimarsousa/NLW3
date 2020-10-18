import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class create_orphanages1603046426221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar altecaoes
        //criar tablea, criar um novo campo, deletar algum campo
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar'
            },
            {
                name: 'latitude',
                type: 'varchar',
                scale: 10,
                precision: 2,
            },
            {
                name: 'longitude',
                type: 'varchar',
                scale: 10,
                precision: 2,
            },
            {
                name: 'about',
                type: 'text',
            },
            {
                name: 'instructions',
                type: 'text',
            },
            {
                name: 'open_on_weekends',
                type: 'text',
                default: false,
            }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {    
        //Desfazer o que foi feito up
        await queryRunner.dropTable('orphanages');
    }

}
