import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { MovieDbService } from '../../services/movie-db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movieDeailsList = [];  
  sum :number;  
  screenWidth : any;
  throttle = 100;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  
  photos: any;  
  dataUnsubscribe: Subscription;
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

  }
  getScreenSize(width: number){
    debugger
    if (width < 576) {
      this.sum = 3; 
    } else if (width >= 576 && width < 768) {    
      this.sum = 4;
    } else if (width >= 768 && width <= 992) {   
      this.sum = 8;
    } else if (width >= 992 && width <= 1600) {   
      this.sum = 6;
    }
    else {
      console.log(width);
    }
  }
  getMovieDetails() {  
 
   this.dataUnsubscribe=this.movieDbService.getdata('movie', this.sum).subscribe((response) => { 
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
    this.sum += this.start;  
    this.getMovieDetails();  
    this.direction = "down";  
  }  

  ngOnDestroy(){
    if(this.dataUnsubscribe){
      this.dataUnsubscribe.unsubscribe();
      console.log(this.dataUnsubscribe);
    }
  }
  
}
