import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CustomerController} from './controller/customer.controller';
import {CustomerService} from './service/customer.service';
import {ConfigModule} from '@nestjs/config';
import {CustomerRepository} from './repository/customer.repository'
import {Customer, CustomerSchema} from '@/schemas/customer/customer.schema';


@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{name: Customer.name, schema: CustomerSchema}])
  ],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository]
})
export class CustomerModule {}
