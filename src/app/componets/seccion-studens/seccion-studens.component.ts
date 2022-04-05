import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { persons } from 'src/app/models/person.model';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-seccion-studens',
  templateUrl: './seccion-studens.component.html',
  styleUrls: ['./seccion-studens.component.css']
})
export class SeccionStudensComponent implements OnInit {
  studentForm : FormGroup
  title = 'student section'
  listStudents: persons[]=[];
  listStudentsLocal: persons[]=[];
  page_number: number = 0
  searchStudent = ''
  constructor(public _personsService: StudentsService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _studentService: StudentsService,
              private aRouter: ActivatedRoute) { 
     this.studentForm = this.fb.group({
      name: ['',Validators.required],
      patronus: ['',[Validators.required,Validators.min(4), Validators.max(4)]],
      yearOfBirth: ['',Validators.required],
                  img: ['',Validators.required]
                })
              }

              filters = '';

  ngOnInit(): void {
    this.listStudents = this._personsService.getStudents()
    this.obtenerStudents()
    
  }
  crearStudent(){
    const STUDENT: persons = {
      name: this.studentForm.get('name')?.value,
      patronus: this.studentForm.get('patronus')?.value,
      yearOfBirth: this.studentForm.get('yearOfBirth')?.value,
      image: this.studentForm.get('img')?.value
    }
    this._personsService.addStudents(STUDENT)    
      this.studentForm.reset()
      this.obtenerStudents()  
}
obtenerStudents(){
  this.listStudentsLocal = this._personsService.getStudents();
  this._personsService.getAllStudents().subscribe(data =>{
    this.listStudents = data
    this.listStudentsLocal.forEach(element => {
      this.listStudents.push(element)
    });
    console.log(this.listStudents)
  }, error =>{
    console.log(error);
  })
  
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

