import { NgModule } from '@angular/core';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { IndividualStoryComponent } from './components/individual-story/individual-story.component';
import {CommonModule} from "@angular/common";
import {TopStoriesRoutingFeatureModule} from "./top-stories-routing.feature.module";

@NgModule({
  declarations: [
    TopStoriesComponent,
    IndividualStoryComponent
  ],
  imports: [
    CommonModule,
    TopStoriesRoutingFeatureModule
  ],
  exports: []
})
export class TopStoriesFeatureModule { }
