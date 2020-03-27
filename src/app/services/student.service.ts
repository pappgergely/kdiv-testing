import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Gender } from '../interfaces/student';
import { StudentsResponse } from '../interfaces/students-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: BehaviorSubject<Student[]>;
  private readonly SERVER_URL = 'https://pappgergely.info/kdiv/students';

  constructor(private http: HttpClient) {
    this.students = new BehaviorSubject([]);
  }

  getStudents(): BehaviorSubject<Student[]> {
    this.http.get<StudentsResponse>(this.SERVER_URL, {withCredentials: true})
      .subscribe(resp => this.updateStudents(resp));
    return this.students;
  }

  addStudent(s: Student): Promise<boolean> {
    //this.students.push(s);
    return new Promise((resolve, reject) => {
      const obs = this.http.post<StudentsResponse>(
        this.SERVER_URL,
        { student: s },
        { withCredentials: true }
      ).pipe(share());
      obs.subscribe(resp => this.updateStudents(resp));
      obs.subscribe(resp => resolve(resp.success), () => resolve(false));
    });

  }

  deleteStudent(s: Student): void {
    // this.students.splice(this.students.indexOf(s), 1);
    // this.students = this.students.filter( st => st != s );
    this.http.delete<StudentsResponse>(
      this.SERVER_URL + '?id=' + s.id,
      {withCredentials: true}
    ).subscribe(resp => this.updateStudents(resp));
  }

  public modifyStudent(id: number, s: Student): void {
    this.http.put<StudentsResponse>(
      this.SERVER_URL + '?id=' + id,
      { student: s },
      {withCredentials: true}
    ).subscribe(resp => this.updateStudents(resp));
  }

  public genderValidator(control: AbstractControl): ValidationErrors | null {
    return ['male', 'female'].includes(control.value.toLowerCase()) ? null : {binary: true};
  }

  private updateStudents(response: StudentsResponse) {
    if (response.success) {
      this.students.next(response.students);
    }
  }

}
