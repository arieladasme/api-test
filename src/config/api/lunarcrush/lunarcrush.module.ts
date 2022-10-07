import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LunarcrushService } from './lunarcrush.service';
import { LunarcrushController } from './lunarcrush.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaEntity } from './entities/meta.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MetaEntity])],
  controllers: [LunarcrushController],
  providers: [LunarcrushService],
})
export class LunarcrushModule {}
