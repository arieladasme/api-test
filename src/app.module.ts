import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LunarcrushModule } from './config/api/lunarcrush/lunarcrush.module';
import { CoinsModule } from './coins/coins.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LunarcrushModule, CoinsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
