import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LunarcrushModule } from './config/api/lunarcrush/lunarcrush.module';
import { CoinModule } from './modules/coin/coin.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LunarcrushModule, CoinModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
