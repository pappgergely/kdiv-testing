import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/interfaces/student';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-modify-student-modal',
  templateUrl: './modify-student-modal.component.html',
  styleUrls: ['./modify-student-modal.component.scss']
})
export class ModifyStudentModalComponent implements OnInit {

  student: Student;
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private studentService: StudentService) {
    // this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: this.fb.control(this.student.name, Validators.required),
      email: this.fb.control(this.student.email, [Validators.required, Validators.email]),
      age: this.fb.control(this.student.age, [Validators.required, Validators.min(18), Validators.max(100)]),
      gender: this.fb.control(this.student.gender, this.studentService.genderValidator),
    });
  }

  submit(): boolean {
    if (this.form.valid) {
      this.studentService.modifyStudent(this.student.id, this.form.value);
      this.activeModal.close();
    } else {
      return false;
    }
  }

}
