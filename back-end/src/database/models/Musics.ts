import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Musics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  artist: string;

  @Column()
  genre: string;

  @Column()
  path: string;

  @Column()
  views: number;

  @Column('time with time zone')
  date: Date;
}
