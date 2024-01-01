import {Inject, Injectable} from "@angular/core";
import {IContent} from "../../shared/models/icontent.model";
import {FunctionalitiesListService} from "../../core/services/functionalities-list.service";
import {Observable, shareReplay, tap} from "rxjs";
import {REQUEST_SERVICE_IMPL} from "./requests-service-impl.service";
import {RequestsService} from "../interfaces/requests-service.interface";

/* service that stores data after it is downloaded by RequestsService */

@Injectable()
export class ContentDataService {
  constructor(@Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService,
              private functionalities: FunctionalitiesListService) {
  }

  isLoaded: boolean = false;
  loaded$!: Observable<IContent[]>;

  /* a method that checks if data has been downloaded already */
  passLoadedData() {
    if(!this.isLoaded) {
      return this.getContentIfArrayIsEmpty();
    } else {
      return this.loaded$;
    }
  }

  /* a method that downloads the requested data */
  getContentIfArrayIsEmpty() {
    return this.loaded$ = this.requestsService.
    getContentData(
      this.functionalities.selectFunctionality(this.functionalities.selectedFunctionality).dataUrl!
    ).
    pipe(
      shareReplay(1),
      tap(() => {
        this.isLoaded = true;
      })
    );
  }
}