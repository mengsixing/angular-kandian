import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {TagList,BannerList,NewsList} from '../appType'

@Injectable()
export class HomeService {
  constructor(public http:HttpClient) {
  }

  getTags(){
    return this.http.get<TagList>('http://211.149.160.35/api/cate/cate_list')
  }
  getBanners(){
    return this.http.get<BannerList>('http://211.149.160.35/api/face/face_list')
  }
  getNewsList(cid,offset){
    return this.http.get<NewsList>(`http://211.149.160.35/api/news/news_list?cid=${cid}&offset=${offset}`)
  }

}
