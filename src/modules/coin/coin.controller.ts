import { Controller, Get, Param } from '@nestjs/common';
import { CoinService } from './coin.service';
//import { CreateCoinDto } from './dto/create-coin.dto';
//import { UpdateCoinDto } from './dto/update-coin.dto';

@Controller('coin')
export class CoinController {
  constructor(private readonly coinService: CoinService) {}

  @Get()
  findAll() {
    return this.coinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coinService.findOne(+id);
  }

  /* @Post()
  create(@Body() createCoinDto: CreateCoinDto) {
    return this.coinService.create(createCoinDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoinDto: UpdateCoinDto) {
    return this.coinService.update(+id, updateCoinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coinService.remove(+id);
  } */
}
