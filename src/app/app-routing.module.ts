import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./root/components/home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'top-stories', loadChildren: () => import('./feature-top-stories/top-stories.feature.module')
      .then(m => m.TopStoriesFeatureModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }