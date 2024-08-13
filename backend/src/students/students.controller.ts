import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from '../entity/student.entity';
import { BasicAuthGuard } from '../auth/basic-auth/basic-auth.guard';

@Controller()
@UseGuards(BasicAuthGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('crear-alumno')
  createStudent(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Get('consultar-alumno/:idGrado')
  getStudentsByGrade(@Param('idGrado') grade: string): Promise<Student[]> {
    return this.studentsService.findByGrade(grade);
  }
}
