import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHighlights1602540800154 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'highlights',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'playlists',
            type: 'varchar',
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
    await queryRunner.dropTable('highlights');
  }

}
