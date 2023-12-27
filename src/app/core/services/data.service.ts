import {Inject, Injectable} from "@angular/core";
import {IContent} from "../../shared/models/icontent.model";
import {FunctionalitiesListService} from "./functionalities-list.service";
import {Observable, shareReplay, tap} from "rxjs";
import {RequestsService} from "../../feature-top-stories/interfaces/requests-service.interface";
import {REQUEST_SERVICE_IMPL} from "./requests-service-impl.service";

@Injectable()
export class DataService {
  constructor(@Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService,
              private functionalities: FunctionalitiesListService) {
  }

  isLoaded: boolean = false;
  loaded$!: Observable<IContent[]>;

  passLoadedData() {
    if(!this.isLoaded) {
      return this.getContentIfArrayIsEmpty();
    } else {
      return this.loaded$;
    }
  }

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
