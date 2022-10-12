import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('MARKETXCOIN')
export class CryptocompareEntity {
  @PrimaryGeneratedColumn()
  ID_MARKETXCOIN: number;

  @Column({ type: 'varchar', length: 8 })
  ID_COIN: string;

  @Column({ type: 'float' })
  PRICE: number;

  @Column({ type: 'int' })
  LASTUPDATE: number;

  @Column({ type: 'float' })
  VOLUMEDAY: number;

  @Column({ type: 'float' })
  VOLUME24HOUR: number;

  @Column({ type: 'float' })
  OPENDAY: number;

  @Column({ type: 'float' })
  CHANGE24HOUR: number;

  @Column({ type: 'float' })
  CHANGEDAY: number;

  @Column({ type: 'int' })
  SUPPLY: number;

  @Column({ type: 'float' })
  MKTCAP: number;
}
