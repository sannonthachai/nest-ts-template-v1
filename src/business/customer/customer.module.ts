import {Module} from '@nestjs/common';
import {CustomerController} from './controller/customer.controller';
import {CustomerService} from './service/customer.service';
import {ConfigModule} from '@nestjs/config';


@Module({
  imports: [ConfigModule],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
