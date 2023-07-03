import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSrv: ComicsService) { }
  allComics: any[];
  filterComics = '';
  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.comicsSrv.getAllComics().subscribe((res) => {
      this.allComics = res;
    })
  }

}
