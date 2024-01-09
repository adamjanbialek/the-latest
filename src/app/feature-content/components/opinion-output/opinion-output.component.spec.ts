import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionOutputComponent } from './opinion-output.component';

describe('OpinionOutputComponent', () => {
  let component: OpinionOutputComponent;
  let fixture: ComponentFixture<OpinionOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
