import {NgModule} from "@angular/core";
import {REQUEST_SERVICE_IMPL, RequestsServiceImpl} from "./services/requests-service-impl.service";
import {FeatureContentSharedModule} from "../feature-content/feature-content-shared.module";

@NgModule({
  declarations: [
  ],
  imports: [
    FeatureContentSharedModule,
  ],
  exports: [
  ],
  providers: [
    /* concrete of a service through a use of InjectionToken based on the Request Service interface */
    {provide: REQUEST_SERVICE_IMPL, useClass: RequestsServiceImpl}
  ]
})
export class FeatureArticlesModule { }
