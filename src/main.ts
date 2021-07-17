import {TransformInterceptor} from '@/intercepter/http-response';
import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(configService.get<string>('port'));
}
bootstrap();
