import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import * as moment from 'moment';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.sass']
})
export class NewsListingComponent implements OnInit {
  private p: number = 1;
  private NewsSourceID: string;  
  constructor(private route: ActivatedRoute, private rest: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.NewsSourceID = params['id'];      
    });   
    this.GetNewsHeadLinesBySourceID(this.NewsSourceID);
  }
  private NewsHeadlines : any;
  GetNewsHeadLinesBySourceID(newsSourceID : any){
    this.rest.getNewsListingBySource(newsSourceID).subscribe((data: {}) => {      
      this.NewsHeadlines = data;
    });
  }
}
