import { Controller, Get } from '@nestjs/common';
import { CryptocompareService } from './cryptocompare.service';
import { Cron, CronExpression } from '@nestjs/schedule';
//import { CreateCryptocompareDto } from './dto/create-cryptocompare.dto';
//import { UpdateCryptocompareDto } from './dto/update-cryptocompare.dto';

@Controller('cryptocompare')
export class CryptocompareController {
  constructor(private readonly cryptocompareService: CryptocompareService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  @Get('market-coin')
  GetPriceByCoin() {
    console.log('run market-coin');
    return this.cryptocompareService.GetPriceByCoin('BTC');
  }
  /* 
  @Post()
  create(@Body() createCryptocompareDto: CreateCryptocompareDto) {
    return this.cryptocompareService.create(createCryptocompareDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cryptocompareService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCryptocompareDto: UpdateCryptocompareDto,
  ) {
    return this.cryptocompareService.update(+id, updateCryptocompareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cryptocompareService.remove(+id);
  } */
}
