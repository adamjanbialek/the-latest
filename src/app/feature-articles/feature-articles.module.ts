import {NgModule} from "@angular/core";
import {FeatureContentSharedModule} from "../feature-content/feature-content-shared.module";
import {REQUEST_SERVICE_IMPL} from "../feature-content/interfaces/requests-service.interface";
import {ArticlesRequestsServiceImpl} from "./services/articles-requests-service-impl.service";

@NgModule({
  imports: [
    FeatureContentSharedModule,
  ],
  providers: [
    /* concrete of a service through a use of InjectionToken based on the Request Service interface */
    {provide: REQUEST_SERVICE_IMPL, useClass: ArticlesRequestsServiceImpl}
  ]
})
export class FeatureArticlesModule { }
