import { Controller, Get, Param } from '@nestjs/common';
import { LunarcrushService } from './lunarcrush.service';
import { CreateLunarcrushDto } from './dto/create-lunarcrush.dto';
import { UpdateLunarcrushDto } from './dto/update-lunarcrush.dto';
import { ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'My Header',
  description: 'A Custom Header',
})
@Controller('lunarcrush')
export class LunarcrushController {
  constructor(private readonly lunarcrushService: LunarcrushService) {}

  @Get('coins')
  getBitcoinPrice() {
    return this.lunarcrushService.getBitcoinPrice();
  }

  /*  @Get()
  findAll() {
    return this.lunarcrushService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lunarcrushService.findOne(+id);
  } */
}
