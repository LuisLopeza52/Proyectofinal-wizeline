import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component'; 
import { ComicsComponent } from './components/comics/comics.component';


const routes : Routes = [
  {
    path : '', redirectTo: '/personajes', pathMatch: 'full'
  },
  {
    path: 'personajes',  component : PersonajesComponent
  },
  {
    path: 'comics', component: ComicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
