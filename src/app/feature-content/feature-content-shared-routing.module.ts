import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";
import {TopStoriesComponent} from "./components/top-stories/top-stories.component";
import {IndividualStoryComponent} from "./components/individual-story/individual-story.component";

const appRoutes: Routes = [
  {path: '', component: TopStoriesHomeComponent,
    children: [
      {path: '', component: TopStoriesComponent, },
      {path: ':id', component: IndividualStoryComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})

export class FeatureContentSharedRoutingModule {}
