import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Position {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;
}
