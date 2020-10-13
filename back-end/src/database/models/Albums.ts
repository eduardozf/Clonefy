import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Albums {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  artist: string;

  @Column()
  musics: string;

  @Column()
  genre: string;

  @Column('time with time zone')
  date: Date;
}
