import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navList: Array<any> = [
    {
      title: 'Lastest Stories',
      link: 'latest-news'
    },
    {
      title: 'Top Stores',
      link: 'top-news'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
