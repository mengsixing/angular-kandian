import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from './home/home.service';
import { DetailService } from './detail/detail.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'my', component: MyComponent },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    NotfoundComponent,
    DetailComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [HomeService,DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
