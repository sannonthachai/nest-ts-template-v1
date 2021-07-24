import {ErrorCode, ErrorMessage} from '@/const/error';
import {CustomException} from '@/exception/http-exception';
import {HttpStatus, Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {CreateCustomerDto} from '../dto/create-customer.dto';
import {UpdateCustomerDto} from '../dto/update-customer.dto';
import {CustomerRepository} from '../repository/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private configService: ConfigService, public customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto> {
    let response = {} as CreateCustomerDto
    try {
      const customer = await this.customerRepository.create(createCustomerDto)
      response.citizenID = customer.citizenID
      response.firstNameTH = customer.firstNameTH
      response.lastNameTH = customer.lastNameTH
    } catch(e) {
      console.error(`customerRepository create error : ${e}`)
      throw new CustomException(ErrorCode.ErrorUnexpected, ErrorMessage.ErrorUnexpected, HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return response
  }

  findAll(): CreateCustomerDto {
    let customer = new CreateCustomerDto()
    customer.citizenID = 1100801054599
    customer.firstNameTH = 'sannonthachai'
    customer.lastNameTH = 'tunphainich'
    return customer
  }

  findOne(id: number): string {
    console.log(this.customerRepository.findAll())
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
