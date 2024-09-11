import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chess_games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  event: string;

  @Column({ length: 32 })
  site: string;

  @Column()
  date: Date;

  @Column({ length: 32 })
  white: string;

  @Column({ length: 32 })
  black: string;

  @Column({ length: 10 })
  result: string;

  // @Column()
  // utcDate: Date;
  //
  // @Column()
  // utcTime: Date;

  // @Column({ length: 10 })
  // whiteElo: string;
  //
  // @Column({ length: 10 })
  // blackElo: string;

  // @Column({ length: 10 })
  // whiteRatingDiff: string;
  //
  // @Column({ length: 10 })
  // blackRatingDiff: string;
  //
  // @Column({ length: 10 })
  // whiteTitle: string;
  //
  // @Column({ length: 10 })
  // blackTitle: string;
  //
  // @Column({ length: 32 })
  // variant: string;
  //
  // @Column({ length: 32 })
  // timeControl: string;

  @Column({ length: 10 })
  eco: string;

  @Column({ length: 100 })
  opening: string;

  @Column({ length: 20 })
  termination: string;

  @Column('jsonb')
  moves: string;
}
