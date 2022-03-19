import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 拦截器
import { TransformInterceptor } from './core/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor);

  await app.listen(3000);
}
bootstrap();
