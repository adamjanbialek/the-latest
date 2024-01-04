import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./root/components/home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'content/articles', loadChildren: () => import('./feature-articles/feature-articles.module')
      .then(m => m.FeatureArticlesModule), data: {functionality: 'articles'}
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
