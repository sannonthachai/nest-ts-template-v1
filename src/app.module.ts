import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CustomerModule} from './business/customer/customer.module';
import configuration from '@/config/configuration';


@Module({
  imports: [
    CustomerModule,
    ConfigModule.forRoot({
      load: [configuration]
    })
  ]
})
export class AppModule {}
