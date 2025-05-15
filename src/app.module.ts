import { Module } from '@nestjs/common';
import { TrafoModule } from './trafo/trafo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TrafoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
