import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PointGroup } from '../../point-group/entities';

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @Column('bool')
  isActive: boolean;

  @ManyToOne(() => PointGroup, (pointGroup) => pointGroup.points)
  @JoinColumn({ name: 'id' })
  pointGroupId: string;
}
