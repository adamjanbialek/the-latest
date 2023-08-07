import { NgModule } from '@angular/core';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { IndividualStoryComponent } from './components/individual-story/individual-story.component';
import {CommonModule} from "@angular/common";
import {TopStoriesRoutingFeatureModule} from "./top-stories-routing.feature.module";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";

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
    CoreModule
  ],
  exports: []
})
export class TopStoriesFeatureModule { }
