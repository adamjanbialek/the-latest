import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TopStoriesComponent} from "./components/top-stories/top-stories.component";
import {IndividualStoryComponent} from "./components/individual-story/individual-story.component";

const appRoutes: Routes = [
  {path: '', component: TopStoriesComponent},
  {path: 'top-stories', component: IndividualStoryComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
})

export class TopStoriesRoutingFeatureModule {

}
