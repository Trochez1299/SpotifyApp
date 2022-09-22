import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  loading:boolean;
  artist:any;
  topTracks:any;

  constructor( private router: ActivatedRoute, private _SpotifyService: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( (params:any) =>{
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
      this.loading = false;
    })
  }

  getArtist( id: string ){
    this._SpotifyService.getItem( id ).subscribe((artist:any) =>{
      this.artist = artist;
    });
  }

  getTopTracks( id: string ){
    this._SpotifyService.getTopTracks( id ).subscribe((topTracks:any) =>{
      this.topTracks = topTracks;
    });
  }

}
