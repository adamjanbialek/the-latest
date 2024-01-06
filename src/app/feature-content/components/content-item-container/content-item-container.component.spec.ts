import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemContainerComponent } from './content-item-container.component';

describe('ContentItemContainerComponent', () => {
  let component: ContentItemContainerComponent;
  let fixture: ComponentFixture<ContentItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentItemContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
