import {ChangeDetectionStrategy, Component, Inject, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IContent} from "../../models/icontent.model";
import {
  DidYouReadOptions,
  DidYouReadOptionsDefaultAnswer,
  ResidenceDefault, ResidenceOptions,
  UsernameDefault,
  YourThoughtsDefault
} from "../../data/variables";
import {DataService} from "../../../core/services/data.service";
import {RequestsService} from "../../../feature-top-stories/interfaces/requests-service.interface";
import {REQUEST_SERVICE_IMPL} from "../../../core/services/requests-service-impl.service";

@Component({
  selector: 'app-user-reactions-form',
  templateUrl: './user-reactions-form.component.html',
  styleUrls: ['./user-reactions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserReactionsFormComponent {
  constructor(public dataService: DataService, @Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService) {
  }

  @ViewChild('f') reactionForm!: NgForm;
  @Input() selectedContentItem!: IContent;

  didYouReadOptions = DidYouReadOptions;
  didYouReadOptionsDefaultAnswer = DidYouReadOptionsDefaultAnswer;
  didYouReadOptionsKeys = Object.keys(DidYouReadOptions);
  didYouReadOptionsValues = Object.values(DidYouReadOptions);
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
        this.reactionForm.resetForm();
      }
    });
  }
}
