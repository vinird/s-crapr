import { Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Scrapper {
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
  url: string;

  @Column()
  cssSelector: string;

  @Column()
  outputFormat: 'raw' | 'json' | 'text';
}