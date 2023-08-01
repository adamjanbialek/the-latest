import { NgModule } from '@angular/core';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { IndividualStoryComponent } from './components/individual-story/individual-story.component';
import {CommonModule} from "@angular/common";
import {TopStoriesRoutingFeatureModule} from "./top-stories-routing.feature.module";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

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
    FormsModule,
    SharedModule
  ],
  exports: []
})
export class TopStoriesFeatureModule { }
