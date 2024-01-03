import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import {TopStoriesHomeComponent} from "./components/top-stories-home/top-stories-home.component";
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { IndividualStoryComponent } from './components/individual-story/individual-story.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {UserReactionsFormComponent} from "./components/user-reactions-form/user-reactions-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {ContentDataService} from "./services/content-data.service";
import {FeatureContentSharedRoutingModule} from "./feature-content-shared-routing.module";

@NgModule({
  declarations: [
    TopStoriesHomeComponent,
    TopStoriesComponent,
    IndividualStoryComponent,
    UserReactionsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    FeatureContentSharedRoutingModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports: [
  ],
  providers: [
    ContentDataService
  ]
})
export class FeatureContentSharedModule { }
