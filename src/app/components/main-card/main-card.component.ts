import { Component } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {
  constructor(private song: SongsService){ }
  list:any=[]
  
  ngOnInit() {
    this.song.getSongs().subscribe((data) => {
      this.list = data;
      console.log(this.list)
    })
  }

  redirect(song: any): void {
    window.location.href = song.link;
  }

}
