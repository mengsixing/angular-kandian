import { Component, OnInit, ElementRef } from '@angular/core';
import BScroll from '../../../node_modules/better-scroll/src'

import { Store } from '@ngrx/store';
import { INCREMENT } from '../counter';

import { Router } from '@angular/router';

import { HomeService } from './home.service';

import { AppState } from '../appType'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagList = [{
    id: 1,
    name: ''
  }];
  cid = 0;
  offset = 0;
  pageIndex = 0;
  bannerList = [];
  newsList = [];
  bScroll;

  constructor(
    private homeService: HomeService,
    private elementRef: ElementRef,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    //this.getTags();
    this.getFirtLoad();
    this.getBanners();
    //this.getNewsList();
    var that = this;
    let divEle = that.elementRef.nativeElement.querySelector('#newsListWrapper');
    setTimeout(() => {
      this.bScroll = new BScroll(divEle, {
        click: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      });
      this.bScroll.on("scrollEnd", function () {
        if (that.bScroll.maxScrollY === that.bScroll.y) {
          //获取选中的标签id
          let tagId = that.cid;
          let offset = that.pageIndex * 10;
          that.getNewsList(tagId, offset, false);
        }
      })
    }, 1000)

  }

  getTags() {
    return this.homeService.getTags().subscribe((data) => {
      this.tagList = data.data;
    });
  }
  getBanners() {
    return this.homeService.getBanners().subscribe(data => {
      this.bannerList = data.data;
    });
  }
  getNewsList(cid, offset, empty) {
    return this.homeService.getNewsList(cid, offset).subscribe(data => {
      if (empty) {
        this.newsList = data.data.dataList;
      } else {
        this.newsList = this.newsList.concat(data.data.dataList);
      }
      this.pageIndex++;
      this.bScroll && this.bScroll.refresh()
    });
  }
  getFirtLoad() {
    //先获取tagList
    this.homeService.getTags().subscribe((data) => {
      this.tagList = data.data;
      this.cid = this.tagList[0].id
      this.getNewsList(this.cid, 0, false);
    });
  }
  changeTabs(tag) {
    this.pageIndex = 0;
    this.getNewsList(tag.id, 0, true);
  }
  gotoDetail(item) {
    this.store.dispatch({ type: INCREMENT });
    var route = 'detail/' + item.id;
    this.router.navigate([route]);
  }
}
