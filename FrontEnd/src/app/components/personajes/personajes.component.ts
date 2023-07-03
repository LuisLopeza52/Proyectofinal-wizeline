import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PersonajeComponent } from './personaje/personaje.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajesSrv: PersonajesService, public dialog: MatDialog) { }
  allCharacters : any[];
  
  openDialog() {
    const dialogRef = this.dialog.open(PersonajeComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.personajesSrv.getAllCharacter().subscribe((res) => {
      this.allCharacters = res;
      
    })
  }

  getPersonaje(id:string){
    this.personajesSrv.getCharacterById(id.toString()).subscribe((res:any) => {
      console.log(res);
      const dialogRef = this.dialog.open(PersonajeComponent,{
        data: res,
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    })
     
  }

}
