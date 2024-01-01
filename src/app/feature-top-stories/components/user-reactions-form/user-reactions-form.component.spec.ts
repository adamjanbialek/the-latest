import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactionsFormComponent } from './user-reactions-form.component';

describe('UserReactionsFormComponent', () => {
  let component: UserReactionsFormComponent;
  let fixture: ComponentFixture<UserReactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReactionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReactionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
