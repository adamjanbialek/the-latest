import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {FunctionalitiesListService} from "./services/functionalities-list.service";
import {ShortenPipe} from "./pipes/shorten.pipe";

@NgModule({
  declarations: [
    CapitalizePipe,
    ShortenPipe
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CapitalizePipe,
    ShortenPipe
  ],
  providers: [
    FunctionalitiesListService
  ]
})
export class CoreModule { }
