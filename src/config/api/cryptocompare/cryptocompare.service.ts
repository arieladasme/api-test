import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { CreateCryptocompareDto } from './dto/create-cryptocompare.dto';
import { UpdateCryptocompareDto } from './dto/update-cryptocompare.dto';

const headersRequest = {
  'Content-Type': 'application/json',
  'X-CMC_PRO_API_KEY': `Bearer ${process.env.API_KEY_CC}`,
};

@Injectable()
export class CryptocompareService {
  constructor(private httpService: HttpService) {}

  create(createCryptocompareDto: CreateCryptocompareDto) {
    return 'This action adds a new cryptocompare';
  }

  async GetPriceByCoin(coin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD`;
    const response = await lastValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data)),
    );
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} cryptocompare`;
  }

  update(id: number, updateCryptocompareDto: UpdateCryptocompareDto) {
    return `This action updates a #${id} cryptocompare`;
  }

  remove(id: number) {
    return `This action removes a #${id} cryptocompare`;
  }
}
