import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ManageStudentService } from '../manage-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  constructor(private service: ManageStudentService) {}
  @Output() selected = new EventEmitter();
  @Input() students: Observable<Student[]>;

  ngOnInit(): void {}

  onSelect(student) {
    this.selected.emit(student);
  }
}
