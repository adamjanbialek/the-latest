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

@NgModule({
  declarations: [
    TopStoriesHomeComponent,
    TopStoriesComponent,
    IndividualStoryComponent
  ],
  imports: [
    CommonModule,
    TopStoriesRoutingFeatureModule,
    RouterModule,
    SharedModule,
    CoreModule,
    MatProgressSpinnerModule
  ],
  exports: []
})
export class TopStoriesFeatureModule { }
