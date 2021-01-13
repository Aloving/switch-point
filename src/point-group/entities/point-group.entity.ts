import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Point } from '../../point/entities';

export class PointGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => Point, (point) => point)
  points: Point[];
}
