import { TypeOrmModule } from '@nestjs/typeorm';
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'mysql',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: +DB_PORT,
    database: DB_DATABASE,
    synchronize: true,
    entities: [__dirname + '../../modules/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../migrations/*{.ts,.js}'],
  }),
];
