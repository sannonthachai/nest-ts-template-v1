import {ConnectionOptions} from 'typeorm'

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [
    "entities/mysql/*.entity.{ts,js}"
  ],
  migrations: [
    "migration/*.{ts,js}"
  ],
  cli: {
    migrationsDir: "migration"
  }
}

export = connectionOptions
