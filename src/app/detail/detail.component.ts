import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailService } from '../detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title="title"
  constructor(private route: ActivatedRoute,private detailService: DetailService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('获取的id是：',id);
    this.getNewsDetail(id);
  }

  getNewsDetail(id){
    return this.detailService.getDetail(id).subscribe((data)=>{
        console.log(data);
    });
  }

}
