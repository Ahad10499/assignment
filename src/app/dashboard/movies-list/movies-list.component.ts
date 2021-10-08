import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieDeailsList = [];  
  sum = 10;  
  throttle = 300;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  
  photos: any;  
  start: number = 0;  
  
  constructor(private movieDbService: MovieDbService) {  
  }  
  
  ngOnInit() {  
    this.getMovieDetails();  
  }  
  getMovieDetails() {  
    this.movieDbService.getdata('movie', this.sum).subscribe((response: any) => { 
      console.log(response)  
      this.photos = response.photos;  
      this.addItems(this.start, this.sum);  
    }, (error) => {  
      console.log(error);  
    })  
  }  
  
  selector: string = '.main-panel';  
  
  addItems(index, sum) {  
    for (let i = index; i < sum; ++i) {  
      // debugger  
      this.movieDeailsList.push(this.photos[i]);  
      // console.log(this.array);  
  
    }  
  }  
  
  onScrollDown(ev) {    
    // add another 20 items  
    this.start = this.sum;  
    this.sum += 20;  
    this.getMovieDetails();  
    this.direction = "down";  
  }  
  
}
