import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddFieldToMusics1602623344787 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('musics', new TableColumn({
      name: 'file',
      type: 'varchar',
      isNullable: true,
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('musics', 'file');
  }

}
