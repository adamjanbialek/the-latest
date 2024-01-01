import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./root/components/home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'content/:type', loadChildren: () => import('./feature-content/feature-content.module')
      .then(m => m.FeatureContentModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
