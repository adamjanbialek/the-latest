import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {ContentListComponent} from "./content-list.component";
import {DebugElement} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute} from "@angular/router";
import {CapitalizePipe} from "../../../shared/pipes/capitalize.pipe";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";
import {getContentDataMockResponse} from "../../../core/variables/mock-db";
import {of} from "rxjs";
import {ShortenPipe} from "../../../shared/pipes/shorten.pipe";

describe('ContentItemList', () => {
  let fixture: ComponentFixture<ContentListComponent>,
    component: ContentListComponent,
    el: DebugElement,
    contentDataService: any;

  beforeEach(waitForAsync(() => {
    const contentSpy = jasmine.createSpyObj('ContentDataService', ['passLoadedData']);

    TestBed.configureTestingModule({
      declarations: [ContentListComponent, CapitalizePipe, ShortenPipe],
      imports: [CommonModule, MatPaginatorModule, NoopAnimationsModule],
      providers: [
        {provide: ContentDataService, useValue: contentSpy},
        { provide: ActivatedRoute, useValue: { snapshot: { data: {functionality: 'articles'  } } } }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContentListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        contentDataService = TestBed.inject(ContentDataService);
      })
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display 9 items', () => {
    contentDataService.passLoadedData.and.returnValue(of(getContentDataMockResponse));

    fixture.detectChanges();

    const articleTiles = el.queryAll(By.css(".tile"));

    expect(articleTiles).toHaveSize(9);
  });

  it('switch to 6 items displayed on the page in paginator', fakeAsync(() => {
    contentDataService.passLoadedData.and.returnValue(of(getContentDataMockResponse));

    fixture.detectChanges();

    const paginatorMenuOpenBtn = el.query(By.css(".mat-mdc-select-value"));

    paginatorMenuOpenBtn.nativeElement.click();

    tick(500);

    fixture.detectChanges();

    const selectPageSize6 = el.query(By.css(".mat-mdc-option"));

    selectPageSize6.nativeElement.click();

    tick(500);

    fixture.detectChanges();

    const articleTiles = el.queryAll(By.css(".tile"));

    expect(articleTiles).toHaveSize(6);
  }));

  afterEach(() => {
    fixture.destroy();
  })
})
