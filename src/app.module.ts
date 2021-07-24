import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {CustomerModule} from './business/customer/customer.module';
import {MongooseModule} from '@nestjs/mongoose';
import configuration from '@/config/configuration';


@Module({
  imports: [
    CustomerModule,
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoCon'),
        useNewUrlParser: true,
        dbName: 'customer',
      }),
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
