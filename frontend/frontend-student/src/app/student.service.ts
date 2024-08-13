import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('YWRtaW46cGFzc3dvcmQxMjM=')
    });
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-alumno`, student, { headers: this.getHeaders() });
  }

  getStudentsByGrade(grade: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/consultar-alumno/${grade}`, { headers: this.getHeaders() });
  }
}
