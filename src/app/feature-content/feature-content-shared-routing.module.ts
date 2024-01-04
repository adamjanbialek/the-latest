import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContentHomeComponent} from "./components/content-home/content-home.component";
import {ContentListComponent} from "./components/content-list/content-list.component";
import {ContentItemComponent} from "./components/content-item/content-item.component";

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
