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
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
  @Column({ type: 'varchar', length: 20 })
  firstName: string;
  @Column({ type: 'varchar', length: 20 })
  secondName: string;
  @Column()
  age: number;

  @ManyToOne(() => Position, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  position: Position;
}
