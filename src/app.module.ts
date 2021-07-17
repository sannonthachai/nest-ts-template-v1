import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CustomerModule} from './business/customer/customer.module';


@Module({
  imports: [CustomerModule, ConfigModule.forRoot()],
})
export class AppModule {}
