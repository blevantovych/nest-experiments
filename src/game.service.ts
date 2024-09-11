import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  // Method to find all games
  findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  // Method to find a specific game by id
  findOne(id: string): Promise<Game | null> {
    return this.gameRepository.findOneBy({ id });
  }

  // Method to find a specific game by id
  findManyBy(playerName: string): Promise<Game[]> {
    return this.gameRepository.findBy({ white: playerName });
  }

  // Method to create a new game
  create(game: Game): Promise<Game> {
    return this.gameRepository.save(game);
  }

  // Method to remove a game by id
  async remove(id: string): Promise<void> {
    await this.gameRepository.delete(id);
  }
}
