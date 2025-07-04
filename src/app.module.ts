import { Module } from '@nestjs/common';
import { TrafoModule } from './trafo/trafo.module';
import { ConfigModule } from '@nestjs/config';
import { MonitoringModule } from './monitoring/monitoring.module';
import { LocationModule } from './location/location.module';
import { LogStatsModule } from './log_stats/log_stats.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LogLocationModule } from './log_location/log_location.module';

@Module({
  imports: [
    TrafoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MonitoringModule,
    LocationModule,
    LogStatsModule,
    ScheduleModule.forRoot(),
    LogLocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
