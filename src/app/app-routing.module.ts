import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'latest-news', pathMatch: 'full'},

  {path:'latest-news', loadChildren: '../app/lazy/new-stories/new-stories.module#NewStoriesModule'},
  {path:'top-news', loadChildren: '../app/lazy/top-stories/top-stories.module#TopStoriesModule'}

  // {path:'latest-news', loadChildren:() => import('').then(m => m.CustomersModule)},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
