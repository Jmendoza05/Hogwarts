import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { persons } from 'src/app/models/person.model';
import { TeachersService } from 'src/app/service/teachers.service';
@Component({
  selector: 'app-seccion-teachers',
  templateUrl: './seccion-teachers.component.html',
  styleUrls: ['./seccion-teachers.component.css']
})
export class SeccionTeachersComponent implements OnInit {
  title = 'teachers section'
  listteachers: persons[] = [];
  page_number: number = 0
  searchTeacher = ''
  constructor(private _teachersService: TeachersService) { }

  ngOnInit(): void {
    this.obtenerTeachers();
  }
  obtenerTeachers(){
    this._teachersService.getTeachers().subscribe(data =>{      
      this.listteachers = data;
      console.log(this.listteachers);
    },error =>{
      console.log(error)
    }
    )
  }
  nextPage(){
    this.page_number +=5;
  }
  prevPage(){
    if(this.page_number >0){
    this.page_number -=5;
    }
  }
}
