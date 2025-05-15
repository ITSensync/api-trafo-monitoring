import { Module } from '@nestjs/common';
import { TrafoModule } from './trafo/trafo.module';
import { ConfigModule } from '@nestjs/config';
import { MonitoringModule } from './monitoring/monitoring.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TrafoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MonitoringModule,
    LocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
