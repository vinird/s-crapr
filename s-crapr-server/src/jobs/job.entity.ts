import { Entity, Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Job {
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
    scrapperId: string;

    @Column({ default: '*' })
    minute: string;

    @Column({ default: '*' })
    hour: string;

    @Column({ default: '*' })
    dayOfMonth: string;

    @Column({ default: '*' })
    month: string;

    @Column({ default: '*' })
    dayOfWeek: string;

    @Column({ default: false })
    enabled: boolean;

    @Column()
    description: string;
}