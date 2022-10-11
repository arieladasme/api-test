import { PartialType } from '@nestjs/swagger';
import { CreateCryptocompareDto } from './create-cryptocompare.dto';

export class UpdateCryptocompareDto extends PartialType(CreateCryptocompareDto) {}
