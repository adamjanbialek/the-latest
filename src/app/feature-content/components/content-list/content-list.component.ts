import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IContent} from "../../models/icontent.model";
import {Observable, Subscription, tap} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {paginationOptions} from "../../../core/variables/variables";

/* component that outputs all the items being stored in array to the screen */

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentListComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public dataService: ContentDataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  /* gets the data passed through routing(which functionality was selected) */
  functionality = this.activatedRoute.snapshot.data['functionality'];
  loaded$!: Observable<IContent[]>;
  loadedItems!: IContent[];
  selectedPage!: IContent[];

  paginatorPageSubscription!: Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  paginationOptions = paginationOptions;

  ngOnInit() {
    /* loads the data through a service */
    this.loaded$ = this.dataService.passLoadedData()?.pipe(tap(data=> {
      if(this.paginator) {
        this.paginator.length = data.length;
      }
      this.loadedItems = data;
      this.selectedPage = this.loadPage(data, 9, 0);
    }));
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if(this.paginator?.length) {
        this.paginator.length = this.loadedItems?.length;
      }
      this.paginatorPageSubscription = this.paginator.page.pipe(tap(() => this.selectedPage = this.loadPage(this.loadedItems, this.paginator.pageSize, this.paginator.pageIndex))).subscribe();
    })
  }

  loadPage(allItems: IContent[], pageSize: number, pageIndex: number): IContent[] {
    const pageToDisplay: IContent[] = [];
    for (let i = 0; i < pageSize; i++) {
      allItems[(pageSize * (pageIndex)) + i] ? pageToDisplay.push(allItems[(pageSize * (pageIndex)) + i]) : '';
    }
    return pageToDisplay;
  }

  /* a method that redirects to one of the items individual pages */
  toContentItem(index: number) {
    this.router.navigate(['/content/', this.functionality, index]);
  }

  ngOnDestroy() {
    this.paginatorPageSubscription?.unsubscribe();
  }
}
