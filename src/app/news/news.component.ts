import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  NewsSources:any = [];
  p: number = 1;
  constructor(public rest:NewsService) { }

  GetNewsSources() {
    this.NewsSources = [];
    this.rest.getNewsSources().subscribe((data: {}) => {
      console.log(data);
      this.NewsSources = data;
    });
  }

  ngOnInit() {    
    this.GetNewsSources();
  }

}
