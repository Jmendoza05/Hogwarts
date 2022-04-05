import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { persons } from 'src/app/models/person.model';
import { PersonajesService } from 'src/app/service/personajes.service';

@Component({
  selector: 'app-seccion-personajes',
  templateUrl: './seccion-personajes.component.html',
  styleUrls: ['./seccion-personajes.component.css']
})
export class SeccionPersonajesComponent implements OnInit {
  personajesForm : FormGroup;
  homeSelect = null;
  title = 'characters section'
  listOptions:string[]=['slytherin','gryffindor','ravenclaw','hufflepuff']
  optionSelect: string ='';
  listpersonajes: persons[]=[];
  page_number: number = 0
  searchCharacters = ''
  constructor(private fb: FormBuilder,
              private router: Router,
              private _personajesService: PersonajesService,
              private aRouter: ActivatedRoute) {
                this.personajesForm = this.fb.group({home: ['',Validators.required]})
               }
  ngOnInit(): void {
    console.log(this.homeSelect)
  }
  getPersonajes(){
    //this.optionSelect = this.home;
    if(this.homeSelect === null){

    }else{
      console.log(this.homeSelect)
      this._personajesService.obtenerpersonaje(this.homeSelect).subscribe(data =>{
        this.listpersonajes = data
      }, error =>{
        console.log(error);
      })
    }
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
