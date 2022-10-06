import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import 'dotenv/config.js';
import { CreateLunarcrushDto } from './dto/create-lunarcrush.dto';
import { UpdateLunarcrushDto } from './dto/update-lunarcrush.dto';

const headersRequest = {
  'Content-Type': 'application/json', // afaik this one is not needed
  Authorization: `Bearer ${process.env.API_KEY_LC}`,
};

@Injectable()
export class LunarcrushService {
  constructor(private httpService: HttpService) {}
  create(createLunarcrushDto: CreateLunarcrushDto) {
    return 'This action adds a new lunarcrush';
  }

  async getBitcoinPrice() {
    const url = `https://lunarcrush.com/api3/coin/list`;
    const response = await lastValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data)),
    );
    return response;
  }

  findAll() {
    return `This action returns all lunarcrush`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lunarcrush`;
  }

  update(id: number, updateLunarcrushDto: UpdateLunarcrushDto) {
    return `This action updates a #${id} lunarcrush`;
  }

  remove(id: number) {
    return `This action removes a #${id} lunarcrush`;
  }
}
