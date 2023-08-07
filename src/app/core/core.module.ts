import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CapitalizePipe
  ]
})
export class CoreModule { }
