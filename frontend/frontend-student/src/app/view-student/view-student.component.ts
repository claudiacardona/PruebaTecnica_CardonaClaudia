import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  students: any[] = [];
  grade: string = ''; // Propiedad para almacenar el grado ingresado

  constructor(private studentService: StudentService) {}

  onSearch() {
    if (this.grade) {
      this.studentService.getStudentsByGrade(this.grade).subscribe(
        (data) => {
          this.students = data;
        },
        (error) => {
          console.error('Error fetching students:', error);
        }
      );
    }
  }
}
