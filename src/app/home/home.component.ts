import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagList = [];
  bannerList = [];
  newsList = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    console.log('开始请求');
    this.getTags();
    this.getBanners();
    this.getNewsList();
  }
  getTags() {
    // const id = +this.route.snapshot.paramMap.get('id');
    return this.homeService.getTags().subscribe(data => {
      this.tagList = data.data;
    });
  }
  getBanners(){
    return this.homeService.getBanners().subscribe(data => {
      this.bannerList = data.data;
    });
  }
  getNewsList(){
    return this.homeService.getNewsList(36,0).subscribe(data => {
      console.log(data);
      this.newsList = data.data.dataList;
    });
  }
}
