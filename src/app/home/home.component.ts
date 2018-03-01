import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabs = [
    {
      name: 'Tab 1',
    },
    {
      name: 'Tab 2',
    },
    {
      name: 'Tab 3',
    },
    {
      name: 'Tab 4',
    },
    {
      name: 'Tab 5',
    },
    {
      name: 'Tab 6',
    }
  ];
  array = [1];
  newsList = [{
    cover:'http://211.149.160.35/Uploads/images/2018-03-01/5a9774291349f.jpg',
    title: '名家 | 梁实秋：君子之交，淡而不腻，始得长久',
    read: '40269'
  },
  {
    cover:'http://211.149.160.35/Uploads/images/2018-03-01/5a9774291349f.jpg',
    title: '名家 | 梁实秋：君子之交，淡而不腻，始得长久',
    read: '40269'
  }, {
    cover:'http://211.149.160.35/Uploads/images/2018-03-01/5a9767e53f657.jpg',
    title: '收视口碑双重暴击，《一路繁花相送》到底哪里出了错？',
    read: '40269'
  }, {
    cover:'http://211.149.160.35/Uploads/images/2018-03-01/5a9774291349f.jpg',
    title: '名家 | 梁实秋：君子之交，淡而不腻，始得长久',
    read: '40269'
  }];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ 1, 2, 3, 4 ];
    }, 500);
    console.log('开始请求');
    console.log(this.getTags()) ;
  }
  getTags() {
    // const id = +this.route.snapshot.paramMap.get('id');
    return this.homeService.getTags().subscribe(data => {
      console.log('这是data',data);
  });
  }
}
