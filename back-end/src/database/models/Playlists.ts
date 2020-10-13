import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Playlists {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  avatar: string;

  @Column()
  musics: string;

  @Column()
  genre: string;

  @Column()
  private: boolean;

  @Column('time with time zone')
  date: Date;
}
