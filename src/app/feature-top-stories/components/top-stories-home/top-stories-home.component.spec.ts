import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesHomeComponent } from './top-stories-home.component';

describe('TopStoriesHomeComponent', () => {
  let component: TopStoriesHomeComponent;
  let fixture: ComponentFixture<TopStoriesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStoriesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStoriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
