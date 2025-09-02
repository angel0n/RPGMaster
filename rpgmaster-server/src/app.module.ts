import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD?.toString(),
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
      autoLoadEntities: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
