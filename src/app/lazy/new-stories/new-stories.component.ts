import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {
  stories: any[];
  storyAmount:string = "10";
  sub: Subscription;
  constructor(public apiResourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.getData('10')
  }

  getData(storyAmount:string){

    this.sub = this.apiResourcesService.getNewStore(storyAmount).subscribe(stories => {
      this.stories = stories;
    })
  }

  loadMore() {
    const stringTonum = Number(this.storyAmount);
    const plusTen = stringTonum + 10;
    this.storyAmount = plusTen.toString();
    this.getData(this.storyAmount)
  }


  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
