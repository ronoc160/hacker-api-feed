import { TestBed } from '@angular/core/testing';

import { ApiData, ResourcesService } from './resources.service';
import {HttpClientModule} from '@angular/common/http';

describe('ResourcesService', () => {
  let service: ResourcesService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResourcesService]
    });
    service = TestBed.inject(ResourcesService);
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPost: ApiData[] = [{
      by: '12384754',
      descendants: 11,
      id: 234234,
      score: 23,
      time: 1234,
      title: 'y tutorial and take on C++20 coroutines',
      type: 'story',
      url: 'www.google.ie'
    
    }]

    service.listTopStories('10').subscribe(posts => {
      expect(posts).toEqual(dummyPost);
    })
  });
});
