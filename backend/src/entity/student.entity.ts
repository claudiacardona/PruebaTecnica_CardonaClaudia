import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentName: string;

  @Column()
  birthDate: Date;

  @Column()
  fatherName: string;

  @Column()
  motherName: string;

  @Column()
  grade: string;

  @Column()
  section: string;

  @Column()
  admissionDate: Date;
}
