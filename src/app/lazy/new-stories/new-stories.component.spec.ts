import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';

import { NewStoriesComponent } from './new-stories.component';
import { ResourcesService } from 'src/app/services/resources.service';
import { of } from 'rxjs';
import { MockService } from 'src/app/services/mock.service';

describe('NewStoriesComponent', () => {
  let component: NewStoriesComponent;
  let fixture: ComponentFixture<NewStoriesComponent>;
  let service: ResourcesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],

      providers: [
        { provide: ResourcesService, useClass: MockService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ NewStoriesComponent ]
    })
    .compileComponents();
    TestBed.overrideComponent(NewStoriesComponent, {
      set: {
        providers: [{ provide: ResourcesService, useClass: MockService }]
      }
    })
    service = TestBed.inject(ResourcesService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(NewStoriesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.site-contain header h1').textContent).toContain('Latest Stories');
  });
});
