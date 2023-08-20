import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService, UsernameDefault, DidYouReadDefault, ResidenceDefault, ResidenceOptions, YourThoughtsDefault, DidYouReadOptions } from "../../../core/services/data.service";
import {RequestsService} from "../../../core/services/requests.service";
import {IContent} from "../../models/icontent.model";

@Component({
  selector: 'app-user-reactions-form',
  templateUrl: './user-reactions-form.component.html',
  styleUrls: ['./user-reactions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserReactionsFormComponent {
  constructor(public dataService: DataService, private requestsService: RequestsService) {
  }

  @ViewChild('f') reactionForm!: NgForm;
  @Input() selectedContentItem!: IContent;

  didYouRead = DidYouReadDefault;
  didYouReadOptions = DidYouReadOptions;
  defaultResidence = ResidenceDefault;
  residenceOptions = ResidenceOptions;
  yourThoughts = YourThoughtsDefault;

  suggestUsername() {
    this.reactionForm.form.patchValue({
      'username': UsernameDefault
    });
  };

  onSubmit() {
    this.requestsService.postRequest(this.selectedContentItem, {
        username: this.reactionForm.value.username,
        yourThoughts: this.reactionForm.value.yourThoughts,
        didYouRead: this.reactionForm.value.questions.didYouRead,
        residence: this.reactionForm.value.questions.residence
      }).subscribe({
      complete: () => {
        this.requestsService.getFromFirebase();
      }
    });
    this.reactionForm.reset();
  }
}
