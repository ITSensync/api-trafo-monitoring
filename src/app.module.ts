import { Module } from '@nestjs/common';
import { TrafoModule } from './trafo/trafo.module';
import { ConfigModule } from '@nestjs/config';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({
  imports: [
    TrafoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MonitoringModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
