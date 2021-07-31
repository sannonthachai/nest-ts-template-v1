import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterCustomer1627707498835 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("customer", new TableColumn({
      name: "created_at",
      type: "timestamp"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("customer", "created_at");
  }

}
