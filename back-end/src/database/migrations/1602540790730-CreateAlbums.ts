import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlbums1602540790730 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'albums',
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
            name: 'description',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'artist',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'musics',
            type: 'varchar',
          },
          {
            name: 'genre',
            type: 'varchar',
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
    await queryRunner.dropTable('albums');
  }

}
