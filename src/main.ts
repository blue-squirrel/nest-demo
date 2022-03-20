import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 拦截器
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
// 过滤器
import { HttpExceptionFilter } from './core/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor);
  // 全局注册过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
