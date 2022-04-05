import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { SeccionPersonajesComponent } from './componets/seccion-personajes/seccion-personajes.component';
import { SeccionStudensComponent } from './componets/seccion-studens/seccion-studens.component';
import { SeccionTeachersComponent } from './componets/seccion-teachers/seccion-teachers.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'seccion-personajes', component: SeccionPersonajesComponent},
  {path: 'seccion-studens', component: SeccionStudensComponent},
  {path: 'seccion-teachers', component: SeccionTeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
