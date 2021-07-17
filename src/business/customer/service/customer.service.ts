import {Injectable, HttpStatus} from '@nestjs/common';
import {CustomException} from '@/exception/http-exception';
import {CreateCustomerDto} from '../dto/create-customer.dto';
import {UpdateCustomerDto} from '../dto/update-customer.dto';
import {ErrorCode, ErrorMessage} from '@/const/error'
import {ConfigService} from '@nestjs/config';

@Injectable()
export class CustomerService {
  constructor(private configService: ConfigService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll(): CreateCustomerDto {
    let customer = new CreateCustomerDto()
    customer.CitizenID = 1100801054599
    customer.FirstNameTH = 'sannonthachai'
    customer.LastNameTH = 'tunphainich'
    console.log(this.configService.get<string>('MYSQL_CONNECT'))
    return customer
  }

  findOne(id: number): string {
    if (id > 5) throw new CustomException(ErrorCode.ErrorUnexpected, ErrorMessage.ErrorUnexpected, HttpStatus.INTERNAL_SERVER_ERROR)
    return 'ok'
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
