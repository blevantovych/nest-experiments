import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './entities/game.entity';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':playerName')
  async findMany(@Param('playerName') playerName: string): Promise<String[]> {
    const games = await this.gameService.findManyBy(playerName);
    return games.map(({ site }) => site);
  }

  @Post()
  create(@Body() game: Game): Promise<Game> {
    return this.gameService.create(game);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.remove(id);
  }
}
