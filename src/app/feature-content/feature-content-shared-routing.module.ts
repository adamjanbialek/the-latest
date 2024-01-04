import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContentHomeComponent} from "./components/top-stories-home/content-home.component";
import {ContentListComponent} from "./components/top-stories/content-list.component";
import {ContentItemComponent} from "./components/individual-story/content-item.component";

const appRoutes: Routes = [
  {path: '', component: ContentHomeComponent,
    children: [
      {path: '', component: ContentListComponent, },
      {path: ':id', component: ContentItemComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})

export class FeatureContentSharedRoutingModule {}
