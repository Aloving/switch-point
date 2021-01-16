import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PointGroup } from '../../point-group';

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  name: string;

  @Column('bool', {
    default: false,
  })
  isActive: boolean;

  @Column({ nullable: true })
  pointGroupId: number;

  @ManyToOne(() => PointGroup, (pointGroup) => pointGroup.points)
  @JoinColumn({ name: 'pointGroupId', referencedColumnName: 'id' })
  group: PointGroup;
}
