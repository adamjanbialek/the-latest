import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {IContent} from "../../models/icontent.model";
import {
  DidYouReadOptions,
  DidYouReadOptionsDefaultAnswer,
  ResidenceDefault, ResidenceOptions,
  UsernameDefault,
  YourThoughtsDefault
} from "../../../core/variables/variables";
import {ContentDataService} from "../../services/content-data.service";
import {REQUEST_SERVICE_IMPL} from "../../services/requests-service-impl.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsService} from "../../interfaces/requests-service.interface";

@Component({
  selector: 'app-user-reactions-form',
  templateUrl: './user-reactions-form.component.html',
  styleUrls: ['./user-reactions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserReactionsFormComponent {
  constructor(public dataService: ContentDataService, @Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService,
              private formBuilder: FormBuilder) {}

  /* object passed from IndividualStoryComponent representing the details of the content item */
  @Input() selectedContentItem!: IContent;

  /* initial values for userReactionForm */
  didYouReadOptions = DidYouReadOptions;
  didYouReadOptionsDefaultAnswer = DidYouReadOptionsDefaultAnswer;
  didYouReadOptionsKeys = Object.keys(DidYouReadOptions);
  didYouReadOptionsValues = Object.values(DidYouReadOptions);
  defaultResidence = ResidenceDefault;
  residenceOptions = ResidenceOptions;
  yourThoughtsDefault = YourThoughtsDefault;

  /* initial values are set in userReactionForm */
  userReactionForm: FormGroup = this.formBuilder.group({
    username:  ['', [Validators.required, Validators.minLength(6)]],
    yourThoughts: ['', [Validators.required]],
    questions: this.formBuilder.group({
      didYouRead: this.didYouReadOptionsDefaultAnswer,
      residence: this.defaultResidence
    })
  })

  suggestUsername() {
    this.userReactionForm.patchValue({
      'username': UsernameDefault
    });
  }

  onSubmit() {
    this.requestsService.postRequest(this.selectedContentItem, this.userReactionForm.value).subscribe({
      complete: () => {
        /* after posting the values from the userReactionForm all the results stored in the Firebase database
        are outputted to console */
        this.requestsService.getFromFirebase();
        this.userReactionForm.reset();
      }
    });
  }
}
