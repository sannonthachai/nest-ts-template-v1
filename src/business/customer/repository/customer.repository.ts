import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';
import {Customer, CustomerDocument} from '@/schemas/mongo/customer.schema';
import {CreateCustomerDto} from '../dto/create-customer.dto';
import {Model} from 'mongoose';
import {UpdateCustomerDto} from '../dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>, private configService: ConfigService) {}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer =  new this.customerModel(createCustomerDto)
    return createdCustomer.save()
  }

  findAll(): string {
    return 'This action adds a new customer';
  }

  findOne(id: number): string {
    return 'This action adds a new customer';
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
