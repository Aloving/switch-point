import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Point } from '../../point/entities';

@Entity()
export class PointGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => Point, (point) => point.group, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  points: Point[];
}
