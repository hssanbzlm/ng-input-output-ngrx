import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  DoCheck,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ManageStudentService } from '../manage-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent {
  @Output() selected = new EventEmitter();
  @Input() students;

  onSelect(student) {
    this.selected.emit(student);
  }
}
