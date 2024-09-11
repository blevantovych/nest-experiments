import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { GameModule } from './game.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type (PostgreSQL in this case)
      host: 'localhost', // Your database host
      port: 5433, // Default PostgreSQL port
      username: 'postgres', // Your database username
      password: 'mysecretpassword', // Your database password
      database: 'chess_games', // Database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities to auto-load
      synchronize: false,
    }),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
