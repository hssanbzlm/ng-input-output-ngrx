import { SimpleChanges } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css'],
})
export class DetailsStudentComponent implements OnInit {
  constructor() {}
  currentStudent: Student;
  originalStudent: Student;

  @Input() set student(value: Student) {
    this.currentStudent = Object.assign({}, value);
    this.originalStudent = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  ngOnInit(): void {
    this.currentStudent = { id: null, name: '', lastName: '' };
  }

  clickSave(student: Student) {
    const oldNewStudents = [student, this.originalStudent]; // to compare later and decide if update or add
    this.saved.emit(oldNewStudents);
    this.Cancel();
  }
  clickDelete(student) {
    this.deleted.emit(student);
    this.Cancel();
  }

  Cancel() {
    this.currentStudent = { id: null, name: '', lastName: '' };
  }
}
