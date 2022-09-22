import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  message:any;

  constructor( private _spotify: SpotifyService ){
    this.loading = true;
    this.error = false;

    this._spotify.getNewRelease().subscribe(( data:any ) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorService)=>{
      // this.error = true;
      // console.log(errorService + "error");
    });
  }

}
