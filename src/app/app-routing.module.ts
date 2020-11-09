import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MapPageComponent } from './map-page/map-page.component';



const routes: Routes = [
  {
    path:'example-page',
    component: ExamplePageComponent
  },
  {
    path:'blog-post',
    component: BlogPostComponent
  },
  {
    path:'map',
    component: MapPageComponent
  },
  {
    path:'map/:',
    component: MapPageComponent
  },
  {
    path:'blog',
    component: BlogPageComponent
  },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'home-page',
    component: HomePageComponent
  },
  {
    path:'',
    redirectTo:'/example-page',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:"/example-page"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
