//预定义数据返回格式
export class TagList {
  data:Array<any>
}

// {
//   id: string;
//   name: string;
//   look:string;
//   price:string;
//   sort:string;
//   c_weixin:string;
//   c_weixin_url:string;
//   c_code_url:string;
//   is_recommend:string
// }


export class BannerList {
  data:Array<any>
}

// {
//   id: string;
//   type: string;
//   title:string;
//   pic:string;
//   text:string;
//   url:string;
//   js:string;
//   ks_time:string;
//   js_time:string;
//   sort:string;
//   pos:string;
//   is_show:string;
//   jump_out:string;
//   is_app:string;
// }

export class NewsList {
  data:{
    dataList:Array<any>
  }
}

// {
//   id: string;
//   title: string;
//   litpic:string;
//   news_from:string;
//   price:string;
//   click:string;
//   cate_name:string;
//   cate_price:string;
// }


export class NewsDetail{
  data:any
}
