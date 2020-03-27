import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  students: Student[];
  studentsSubscription: Subscription;

  constructor(private studentService: StudentService) {
    this.students = [];
  }

  ngOnInit() {
    this.studentsSubscription = this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      }
    );
  }

  ngOnDestroy() {
    this.studentsSubscription.unsubscribe();
  }

}
