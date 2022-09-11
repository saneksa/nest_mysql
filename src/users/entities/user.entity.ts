import { Position } from 'src/positions/entities/position.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar', length: 20 })
  firstName: string;
  @Column({ type: 'varchar', length: 20 })
  secondName: string;
  @Column()
  age: number;

  @ManyToOne(() => Position)
  @JoinColumn()
  position: Position;
}
