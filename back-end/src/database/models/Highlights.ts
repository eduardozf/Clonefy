import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Highlights {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: "simple-array", default: '' })
  playlists: string[];

  @Column('time with time zone')
  date: Date;
}
