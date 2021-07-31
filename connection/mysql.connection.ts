import * as connectionOptions from '@/ormconfig';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions)
  ],
  exports: [TypeOrmModule]
})

export class MysqlConnectionModule {}
