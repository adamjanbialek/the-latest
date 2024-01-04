import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
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
import {ContentItemComponent} from "./components/individual-story/content-item.component";
import {ContentHomeComponent} from "./components/top-stories-home/content-home.component";
import {ContentListComponent} from "./components/top-stories/content-list.component";

@NgModule({
  declarations: [
    ContentHomeComponent,
    ContentListComponent,
    ContentItemComponent,
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
