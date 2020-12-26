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

  @Input() set student(value) {
    if (value) {
      this.currentStudent = Object.assign({}, value);
    }
  }
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();
  ngOnInit(): void {
    this.currentStudent = { id: null, name: '', lastName: '' };
  }

  clickSave(student) {
    console.log('FROM DETAILS');
    console.log(student);
    this.saved.emit(student);
    this.Cancel();
  }
  clickDelete(student) {
    this.deleted.emit(student);
  }

  Cancel() {
    this.student = { id: null, name: '', lastName: '' };
  }
}
