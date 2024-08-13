import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent {
  student = {
    name: '',
    dob: '',
    fatherName: '',
    motherName: '',
    grade: '',
    section: '',
    entryDate: ''
  };

  constructor(private studentService: StudentService) {}

  onSubmit() {
    console.log('Submitting student data:', this.student);
    this.studentService.createStudent(this.student).subscribe(
      response => {
        console.log('Student inserted:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
