import { identifierName } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonajesService } from 'src/app/services/personajes.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  implements OnInit{


  constructor(
    private personajeSrv : PersonajesService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  chracter: any;

  ngOnInit(){
  }

  getCharacter() {
  }

}
