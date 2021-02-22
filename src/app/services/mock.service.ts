import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin, BehaviorSubject, of } from "rxjs";
import { finalize, mergeMap } from "rxjs/operators";

export interface ApiData {
  by: string,
  descendants: any,
  id: any,
  score: number,
  time: any,
  title: string,
  type: string,
  url: string

}
@Injectable({
  providedIn: 'root'
})

export class MockService {


  constructor(private http: HttpClient) { }
  getTopStore(val) {
    return of([])
  }
  getStory(id) {
  
    return of([])

  
  }
  listTopStories(val){
    return of([])

  }

  getNewStore(val) {
    return of([])

  }

  listNewStore(val) {
    return of([])
  }
}
