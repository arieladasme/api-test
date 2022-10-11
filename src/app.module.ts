import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LunarcrushModule } from './config/api/lunarcrush/lunarcrush.module';
import { CoinModule } from './modules/coin/coin.module';
import { DatabaseModule } from './database/database.module';
import { CryptocompareModule } from './config/api/cryptocompare/cryptocompare.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    LunarcrushModule,
    CoinModule,
    DatabaseModule,
    CryptocompareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
