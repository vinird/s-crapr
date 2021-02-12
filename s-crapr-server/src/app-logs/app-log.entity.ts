import { Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AppLog {
  @Column()
  @Generated("uuid")
  UUID: number;

  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userId: string;

  @Column()
  level: 'info' | 'warn' | 'error';

  @Column()
  message: string;
}