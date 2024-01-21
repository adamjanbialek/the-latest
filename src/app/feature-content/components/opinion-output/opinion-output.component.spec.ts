import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {OpinionOutputComponent} from "./opinion-output.component";
import {getReactionsMockResponse} from "../../../core/variables/mock-db";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

describe('OpinionOutputComponent', () => {

  let fixture: ComponentFixture<OpinionOutputComponent>, component: OpinionOutputComponent, el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionOutputComponent],
      imports: [CommonModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(OpinionOutputComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }))

  it('it should create the component', () => {
      expect(component).toBeTruthy();
  })

  it('it should display the opinions', () => {
    component.data = getReactionsMockResponse;

    fixture.detectChanges();

    const opinions = el.queryAll(By.css('.opinion-container span'));

    expect(opinions).toBeTruthy();
    expect(opinions).toHaveSize(3);
  })

  it('it should display the latest opinions', () => {
    component.data = getReactionsMockResponse;

    fixture.detectChanges();

    const titles = el.queryAll(By.css('.opinion-section .opinion-container h3')),
          lastTitle = el.query(By.css('.opinion-section:last-of-type .opinion-container h3'));

    expect(titles).toHaveSize(2);
    expect(lastTitle.nativeElement.textContent.trim()).toBe(getReactionsMockResponse[1][1][0].title);
  })
})
