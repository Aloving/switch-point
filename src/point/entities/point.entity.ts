import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { PointGroup } from '../../point-group';

@Entity()
export class Point {
  @ApiProperty({
    type: String,
    required: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @Column({ length: 50, default: '' })
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  @Column('bool', {
    default: false,
  })
  isActive: boolean;

  @ApiProperty({
    type: String,
  })
  @Column()
  pointGroupId: string;

  @ManyToOne(() => PointGroup, (pointGroup) => pointGroup.points, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'pointGroupId', referencedColumnName: 'id' })
  group: PointGroup;
}
