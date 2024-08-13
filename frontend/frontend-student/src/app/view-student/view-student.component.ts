import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html'
})
export class ViewStudentComponent {
  grade: string = '';
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  fetchStudents() {
    this.studentService.getStudentsByGrade(this.grade).subscribe(data => {
      this.students = data;
    });
  }
}
