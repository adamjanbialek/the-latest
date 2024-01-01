import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: []
})
export class SharedModule { }
