import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewStoresRoutingModule } from './new-stories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewStoriesComponent } from './new-stories.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NewStoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewStoresRoutingModule,
    MatProgressSpinnerModule,
    RouterModule

  ]
})
export class NewStoriesModule { }
