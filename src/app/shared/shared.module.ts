import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DialogOverviewExampleDialog, NewsCardComponent } from '../shared/components/news-card/news-card.component'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsCardComponent, DialogOverviewExampleDialog],
  exports: [
    NewsCardComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class SharedModule { }
