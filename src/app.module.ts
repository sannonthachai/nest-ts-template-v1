import {Module} from '@nestjs/common';
import {CustomerModule} from './business/customer/customer.module';

@Module({
  imports: [CustomerModule],
})
export class AppModule {}
