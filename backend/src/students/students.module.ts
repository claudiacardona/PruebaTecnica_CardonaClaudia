import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../entity/student.entity';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller'; 

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsService],
  exports: [StudentsService], 
  controllers: [StudentsController], 
})
export class StudentsModule {}