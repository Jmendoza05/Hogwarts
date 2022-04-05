import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PipesModule } from 'w-ng5';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeccionPersonajesComponent } from './componets/seccion-personajes/seccion-personajes.component';
import { HomeComponent } from './componets/home/home.component';
import { SeccionStudensComponent } from './componets/seccion-studens/seccion-studens.component';
import { SeccionTeachersComponent } from './componets/seccion-teachers/seccion-teachers.component';
import { StudentsService } from './service/students.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SeccionPersonajesComponent,
    HomeComponent,
    SeccionStudensComponent,
    SeccionTeachersComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    PipesModule
    

  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
