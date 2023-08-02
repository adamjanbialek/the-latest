import { NgModule } from '@angular/core';
import { UserReactionsFormComponent } from './components/user-reactions-form/user-reactions-form.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    UserReactionsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserReactionsFormComponent
  ]
})
export class SharedModule { }
