import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
import { CoinEntity } from './entities/coin.entity';

@Injectable()
export class CoinService {
  constructor(
    @InjectRepository(CoinEntity)
    private coinRepository: Repository<CoinEntity>,
  ) {}

  create(createCoinDto: CreateCoinDto) {
    return 'This action adds a new coin';
  }

  async findAll() {
    return await this.coinRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} coin`;
  }

  update(id: number, updateCoinDto: UpdateCoinDto) {
    return `This action updates a #${id} coin`;
  }

  remove(id: number) {
    return `This action removes a #${id} coin`;
  }
}
