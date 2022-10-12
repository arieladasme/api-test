import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptocompareService } from './cryptocompare.service';
import { CryptocompareController } from './cryptocompare.controller';
import { CryptocompareEntity } from './entities/cryptocompare.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([CryptocompareEntity])],
  controllers: [CryptocompareController],
  providers: [CryptocompareService],
})
export class CryptocompareModule {}
