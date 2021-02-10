import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFieldToMusics1602623344787
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'musics',
      new TableColumn({
        name: 'path',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('musics', 'path');
  }
}
