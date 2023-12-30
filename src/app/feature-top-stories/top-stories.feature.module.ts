import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import {TopStoriesRoutingFeatureModule} from "./top-stories-routing.feature.module";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { IndividualStoryComponent } from './components/individual-story/individual-story.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RequestsServiceImpl, REQUEST_SERVICE_IMPL} from "../core/services/requests-service-impl.service";
import {DataService} from "../core/services/data.service";
import {UserReactionsFormComponent} from "../shared/components/user-reactions-form/user-reactions-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TopStoriesHomeComponent,
    TopStoriesComponent,
    IndividualStoryComponent,
    UserReactionsFormComponent
  ],
  imports: [
    CommonModule,
    TopStoriesRoutingFeatureModule,
    RouterModule,
    SharedModule,
    CoreModule,
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserReactionsFormComponent
  ],
  providers: [
    {provide: REQUEST_SERVICE_IMPL, useClass: RequestsServiceImpl}, DataService
  ]
})
export class TopStoriesFeatureModule { }
