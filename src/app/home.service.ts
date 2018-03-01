import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(public http:HttpClient) {
  }

  getTags(){
    return this.http.get('http://211.149.160.35/api/cate/cate_list')
  }

}
