import { NgModule } from '@angular/core';
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {ShortenPipe} from "./pipes/shorten.pipe";

@NgModule({
  declarations: [
    CapitalizePipe,
    ShortenPipe
  ],
  exports: [
    CapitalizePipe,
    ShortenPipe
  ],
})
export class SharedModule { }
