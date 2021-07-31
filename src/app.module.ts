import configuration from '@/config/configuration';
import {MongoConnectionModule} from '@/connection/mongo.connection';
import {MysqlConnectionModule} from '@/connection/mysql.connection';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CustomerModule} from './business/customer/customer.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MysqlConnectionModule,
    MongoConnectionModule,
    CustomerModule
  ]
})
export class AppModule {}
