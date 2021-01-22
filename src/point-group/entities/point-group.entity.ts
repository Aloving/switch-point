import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Point } from '../../point/entities';

@Entity()
export class PointGroup {
  @ApiProperty({
    type: String,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
  })
  @Column({ length: 50 })
  name: string;

  @ApiProperty({
    type: String,
  })
  @Column({
    default: '',
  })
  description: string;

  @ApiProperty({
    type: Point,
    isArray: true,
    default: [],
  })
  @OneToMany(() => Point, (point) => point.group, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  points: Point[];
}
