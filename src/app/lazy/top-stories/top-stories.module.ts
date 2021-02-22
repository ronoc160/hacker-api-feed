import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopStoriesRoutingModule } from './top-stories-routing.module';
import { TopStoriesComponent } from './top-stories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    TopStoriesRoutingModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class TopStoriesModule { }
