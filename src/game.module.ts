import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameService } from './game.service'; // Import GameService
import { GameController } from './game.controller'; // Import GameController
import { Game } from './entities/game.entity'; // Import Game entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Game]), // Register the Game entity with TypeORM
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
