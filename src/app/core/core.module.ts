import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {FunctionalitiesListService} from "./services/functionalities-list.service";

@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CapitalizePipe
  ],
  providers: [
    FunctionalitiesListService
  ]
})
export class CoreModule { }
