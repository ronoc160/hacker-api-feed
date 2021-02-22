import { Component, Input, OnInit } from '@angular/core';
import { ApiData, ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  stories: any[];
  storyAmount:string = "10";

  constructor(public apiResourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.getTopStore('10')
  }

  getTopStore(storyAmount:string){

    this.apiResourcesService.getTopStore(storyAmount).subscribe(stories => {
      this.stories = stories;

    })
  }

  loadStories() {
    const stringTonum = Number(this.storyAmount);
    const plusTen = stringTonum + 10;
    this.storyAmount = plusTen.toString();
    this.getTopStore(this.storyAmount)
  }

}
