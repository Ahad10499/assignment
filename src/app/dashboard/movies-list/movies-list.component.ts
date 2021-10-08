import { Component, HostListener, OnInit } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieDeailsList = [];  
  sum :number;  
  screenWidth : any;
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
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
    this.getScreenSize(this.screenWidth);
    this.getMovieDetails();  
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let screenSize=event.target.innerWidth;
    this.getScreenSize(screenSize);
    console.log(event.target.innerWidth)
  }
  getScreenSize(width: number){
    debugger
    if (width < 576) {
      this.sum = 3; 
    } else if (width >= 576 && width < 768) {    
      this.sum = 4;
    } else if (width >= 768 && width <= 1600) {   
      this.sum = 6;
    } else {
      console.log(width);
    }
  }
  getMovieDetails() {  
 
    this.movieDbService.getdata('movie', this.sum).subscribe((response) => { 
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
    }  
  }  
  
  onScrollDown(ev) {     
    this.start = this.sum;  
    this.sum += 20;  
    this.getMovieDetails();  
    this.direction = "down";  
  }  
  
}
