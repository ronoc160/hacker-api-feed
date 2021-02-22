import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin, BehaviorSubject } from "rxjs";
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

export class ResourcesService {
  loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }
  getTopStore(val) {
    this.loadingSubject.next(true);
    return this.listTopStories(val).pipe(
      mergeMap(ids => forkJoin(ids.map(id => this.getStory(id))))
    );
  }
  getStory(id) {
    return this.http.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
  }
  listTopStories(val): Observable<any> {
    return this.http.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json",
      {
        params: {
          orderBy: '"$key"',
          keyOfPost: val,
          limitToFirst: val
        }
      }
    ).pipe(
      finalize(() => this.loadingSubject.next(false))
    )
  }

  getNewStore(val) {
    this.loadingSubject.next(true);
    return this.listNewStore(val).pipe(
      mergeMap(ids => forkJoin(ids.map(id => this.getStory(id))))
    );
  }

  listNewStore(val): Observable<any> {
    return this.http.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json",
      {
        params: {
          orderBy: '"$key"',
          limitToFirst: val
        }
      }
    ).pipe(
      finalize(() => this.loadingSubject.next(false))
    )
  }
}
