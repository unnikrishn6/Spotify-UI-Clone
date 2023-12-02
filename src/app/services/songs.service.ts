import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get('https://my-json-server.typicode.com/unnikrishn6/Spotify-UI-Clone/songs')
  }
  getPlaylists(){
    return this.http.get('https://my-json-server.typicode.com/unnikrishn6/Spotify-UI-Clone/playlists')
  }

}

