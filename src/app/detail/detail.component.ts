import { Component, OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Base64} from 'js-base64';
import { DomSanitizer } from '@angular/platform-browser';
import BScroll from '../../../node_modules/better-scroll/src'

import { DetailService } from '../detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  newsDetail={};
  bScroll;
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    public sanitizer:DomSanitizer,
    private elementRef: ElementRef,
    private location: Location) {
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getNewsDetail(id);

    var that = this;
    let divEle = that.elementRef.nativeElement.querySelector('.detail-news');
    setTimeout(()=>{
      this.bScroll = new BScroll(divEle, {
        click: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      });
    },1000)
  }

  getNewsDetail(id){
    return this.detailService.getDetail(id).subscribe((data)=>{
        data.data.content= this.sanitizer.bypassSecurityTrustHtml(Base64.decode(data.data.content));//
        this.newsDetail=data.data
    });
  }

  goback():void{
    this.location.back();
  }

}
