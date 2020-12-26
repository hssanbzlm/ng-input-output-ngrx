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
export class DetailsStudentComponent {
  currentStudent: Student;
  ngOnInit(): void {
    this.currentStudent = { id: null, name: '', lastName: '' };
  }
  @Input() set student(value) {
    if (value) {
      this.currentStudent = Object.assign({}, value);
    }
  }
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();

  clickSave(student) {
    console.log(student);
    this.saved.emit(student);
  }

  clickDelete(student) {
    this.deleted.emit(student);
    this.Cancel();
  }

  Cancel() {
    this.student = { id: null, name: '', lastName: '' };
  }
}
