import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesService } from 'src/app/services/resources.service';
import {HttpClientModule} from '@angular/common/http';

import { TopStoriesComponent } from './top-stories.component';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResourcesService],
      declarations: [ TopStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(TopStoriesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.site-contain header h1').textContent).toContain('Top Stories');
  });
});
