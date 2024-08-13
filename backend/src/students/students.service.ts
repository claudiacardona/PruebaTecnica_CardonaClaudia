import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  create(student: Student): Promise<Student> {
    return this.studentsRepository.save(student);
  }

  findByGrade(grade: string): Promise<Student[]> {
    return this.studentsRepository.find({ where: { grade } });
  }
}
