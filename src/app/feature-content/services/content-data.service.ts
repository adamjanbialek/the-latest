import {Inject, Injectable} from "@angular/core";
import {IContent} from "../models/icontent.model";
import {FunctionalitiesListService} from "../../core/services/functionalities-list.service";
import {Observable, shareReplay, tap} from "rxjs";
import {REQUEST_SERVICE_IMPL, RequestsService} from "../interfaces/requests-service.interface";

/* service that stores data after it is downloaded by RequestsService */

@Injectable()
export class ContentDataService {
  constructor(@Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService,
              private functionalities: FunctionalitiesListService) {
  }

  /* variable holding a boolean value that controls if data has been already downloaded */
  isLoaded: boolean = false;
  loaded$!: Observable<IContent[]>;

  /* a method that checks if data has been downloaded already and if not then it runs a method that downloads the data */
  passLoadedData(pageSize?: number, pageNumber?: number) {
    if(!this.isLoaded) {
      return this.getContentIfArrayIsEmpty(pageSize, pageNumber);
    } else {
      return this.loaded$;
    }
  }

  /* a method that downloads the requested data */
  getContentIfArrayIsEmpty(pageSize?: number, pageNumber?: number) {
    return this.loaded$ = this.requestsService.
    getContentData(
      this.functionalities.selectFunctionality(this.functionalities.selectedFunctionality)?.dataUrl!, pageSize, pageNumber
    ).
    pipe(
      shareReplay(1),
      tap(() => {
        this.isLoaded = true;
      })
    );
  }
}
