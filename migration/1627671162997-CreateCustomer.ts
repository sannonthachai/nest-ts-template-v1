import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class CreateCustomer1627671162997 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "customer",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true
        },
        {
          name: "citizen_id",
          type: "int",
          length: "13"
        },
        {
          name: "first_name_th",
          type: "varchar",
          length: "50"
        },
        {
          name: "last_name_th",
          type: "varchar",
          length: "50"
        }
      ]
    }), true)

    await queryRunner.createIndex("customer", new TableIndex({
      name: "IDX_CUSTOMER_CITIZEN_ID",
      columnNames: ["citizen_id"]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customer");
  }

}
