import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service ready');
   }

   getQuery( query:string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDaDHZwiMvNltrQ1MNuL1i2cfp4ZhOqE0POV-CF2qx1aVOUJUs1X_OlCBmApEfZ05luswbbxZKLuz-mVNI'
    });

    return this. http.get(url, { headers });
   }

  getNewRelease(){

    return this.getQuery('browse/new-releases').pipe( map( ( data:any ) =>{
      return data.albums.items;
    } ) );
  }

  getSearchItem(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( ( data:any ) =>{
      return data.artists.items;
    } ) );
  }

  getItem(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe( map( ( data:any ) =>{
      return data['tracks'];
    } ) ) ;
  }

}
