import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Point } from '../../point/entities';

@Entity()
export class PointGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => Point, (point) => point.pointGroupId)
  points: Point[];
}
