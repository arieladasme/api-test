import { Controller, Get } from '@nestjs/common';
import { CryptocompareService } from './cryptocompare.service';
//import { CreateCryptocompareDto } from './dto/create-cryptocompare.dto';
//import { UpdateCryptocompareDto } from './dto/update-cryptocompare.dto';

@Controller('cryptocompare')
export class CryptocompareController {
  constructor(private readonly cryptocompareService: CryptocompareService) {}

  @Get('market-coin')
  GetPriceByCoin() {
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
