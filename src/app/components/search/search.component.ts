import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] = [];
  loading: boolean = false;

  constructor( private _spotifyService: SpotifyService ) { }

  buscar(termino:string){
    this.loading = true;
    this._spotifyService.getSearchItem(termino).subscribe ( (data:any) =>{
      this.artistas = data;
      console.log(this.artistas);
      this.loading = false;
    });
  }

}
