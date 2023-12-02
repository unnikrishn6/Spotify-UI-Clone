import { Component } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  constructor(private song: SongsService){ }
  list:any=[]
  
  ngOnInit() {
    this.song.getPlaylists().subscribe((data) => {
      this.list = data;
      console.log(this.list)
    })
  }
  
  redirect(song: any): void {
    window.location.href = song.link;
  }

}
