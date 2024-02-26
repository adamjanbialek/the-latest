import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ContentDataService} from "../../services/content-data.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription, tap} from "rxjs";
import {IContent} from "../../models/icontent.model";
import {REQUEST_SERVICE_IMPL, RequestsService} from "../../interfaces/requests-service.interface";

@Component({
  selector: 'app-content-item-container',
  templateUrl: './content-item-container.component.html',
  styleUrls: ['./content-item-container.component.scss']
})
export class ContentItemContainerComponent implements OnInit, OnDestroy {
  constructor(private dataService: ContentDataService, @Inject(REQUEST_SERVICE_IMPL) private requestService: RequestsService, private activatedRoute: ActivatedRoute) {
  }

  id = this.activatedRoute.snapshot.params['id'];
  loaded$!: Observable<IContent[]>;
  contentData!: IContent[];
  reactions$!: Observable<any>;
  formSubmissionSubscription!: Subscription;

  ngOnInit() {
    /* loads the data through a service */
    this.loaded$ = this.dataService.passLoadedData().pipe(tap(
      data => {
        this.contentData = data;
        this.reactions$ = this.requestService.getUserReactions(this.id, this.contentData);
      }
    ));


    this.formSubmissionSubscription = this.requestService.formSubmitted$.subscribe(() => {
      this.reactions$ = this.requestService.getUserReactions(this.id, this.contentData)
    });
  }

  ngOnDestroy() {
    this.formSubmissionSubscription.unsubscribe();
  }
}
