import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TopStoriesComponent} from "./components/top-stories/top-stories.component";
import {IndividualStoryComponent} from "./components/individual-story/individual-story.component";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";

const appRoutes: Routes = [
  {path: '', component: TopStoriesHomeComponent, children: [
      {path: '', component: TopStoriesComponent, },
      {path: ':id', component: IndividualStoryComponent}
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
})

export class TopStoriesRoutingFeatureModule {

}
