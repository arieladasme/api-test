import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('COIN')
export class CoinEntity {
  @PrimaryColumn({ type: 'int' })
  ID_COIN: number;

  @Column({ type: 'varchar', length: 45 })
  NAME_COIN: string;

  @Column({ type: 'varchar', length: 6 })
  SYMBOL_COIN: string;

  @Column({ type: 'varchar', length: 45 })
  LOGO_COIN: string;
}
