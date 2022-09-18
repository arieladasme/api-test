import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LunarcrushService } from './lunarcrush.service';
import { LunarcrushController } from './lunarcrush.controller';

@Module({
  imports: [HttpModule],
  controllers: [LunarcrushController],
  providers: [LunarcrushService],
})
export class LunarcrushModule {}
