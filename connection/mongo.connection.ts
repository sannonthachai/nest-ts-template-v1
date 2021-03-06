import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoCon'),
        useNewUrlParser: true,
        dbName: 'customer',
      }),
      inject: [ConfigService]
    }),
  ],
  exports: [MongooseModule]
})

export class MongoConnectionModule {}
