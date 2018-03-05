import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewsDetail } from "../appType";

@Injectable()
export class DetailService {

  constructor(public http:HttpClient) { }

  getDetail(id){
    return this.http.get<NewsDetail>(`http://211.149.160.35/api/news/news_detail?id=${id}`)
  }

}
