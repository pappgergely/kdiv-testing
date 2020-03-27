import { Component, OnInit } from '@angular/core';
import { Student, Gender } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student: Student;
  nameValid: boolean;
  emailValid: boolean;
  ageValid: boolean;
  emailRegexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(private studentService: StudentService, private router: Router) {
    this.student = {
      name: '',
      email: '',
      age: null,
      gender: Gender.FEMALE,
    };
    this.nameValid = true;
    this.emailValid = true;
    this.ageValid = true;
  }

  ngOnInit() {
  }

  saveStudent(): void {
    // this.nameValid = ( this.student.name !== '' );
    this.ageValid = this.student.age >= 0 && this.student.age <= 100;
    this.emailValid = this.emailRegexp.test(this.student.email);
    if (this.nameValid && this.emailValid && this.ageValid) {
      this.studentService.addStudent(this.student).then(
        (success) => {
          if (success) {
            this.router.navigateByUrl('/students');
          }
        }
      );
    }
  }

}
