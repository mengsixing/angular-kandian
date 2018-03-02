import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(public http:HttpClient) {
  }

  getTags(){
    return this.http.get('http://211.149.160.35/api/cate/cate_list')
  }
  getBanners(){
    return this.http.get('http://211.149.160.35/api/face/face_list')
  }
  getNewsList(cid,offset){
    return this.http.get(`http://211.149.160.35/api/news/news_list?cid=${cid}&offset=${offset}`)
  }

}
