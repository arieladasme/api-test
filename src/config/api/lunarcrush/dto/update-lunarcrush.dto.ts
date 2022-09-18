import { PartialType } from '@nestjs/swagger';
import { CreateLunarcrushDto } from './create-lunarcrush.dto';

export class UpdateLunarcrushDto extends PartialType(CreateLunarcrushDto) {}
