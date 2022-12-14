import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { CoinEntity } from './entities/coin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoinEntity])],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinModule {}
