import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMusics1602540772578 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'musics',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'artist',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'genre',
            type: 'varchar'
          },
          {
            name: 'views',
            type: 'int',
            isNullable: false
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('musics');
  }

}
