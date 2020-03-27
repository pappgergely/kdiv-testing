import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';
import { ModifyStudentModalComponent } from '../modify-student-modal/modify-student-modal.component';

@Component({
  selector: 'tr[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent implements OnInit {

  @Input()
  student: Student;

  constructor(private studentService: StudentService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  delete(): void {
    this.studentService.deleteStudent(this.student);
  }

  modify(): void {
    const modalRef = this.modalService.open(ModifyStudentModalComponent);
    modalRef.componentInstance.student = this.student;
  }

}
