import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ManageStudentService } from '../manage-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
}) 

export class ListStudentsComponent implements OnInit {

  constructor(private service:ManageStudentService) { } 
  @Output() selected =new EventEmitter()
  students:Student[]; 

  ngOnInit(): void { 
    this.students=this.service.all();
  } 

  onSelect(student){
    
    this.selected.emit(student)
  }




}
