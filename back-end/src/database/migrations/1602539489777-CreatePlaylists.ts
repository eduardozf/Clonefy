import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlaylists1602539489777 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'playlists',
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
            name: 'avatar',
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
            name: 'private',
            type: 'boolean',
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
    await queryRunner.dropTable('playlists');
  }

}
