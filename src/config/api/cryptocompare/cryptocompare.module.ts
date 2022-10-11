import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CryptocompareService } from './cryptocompare.service';
import { CryptocompareController } from './cryptocompare.controller';

@Module({
  imports: [HttpModule],
  controllers: [CryptocompareController],
  providers: [CryptocompareService],
})
export class CryptocompareModule {}
