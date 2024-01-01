import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {IContent} from "../../../shared/models/icontent.model";
import {
  DidYouReadOptions,
  DidYouReadOptionsDefaultAnswer,
  ResidenceDefault, ResidenceOptions,
  UsernameDefault,
  YourThoughtsDefault
} from "../../../shared/data/variables";
import {DataService} from "../../../core/services/data.service";
import {RequestsService} from "../../interfaces/requests-service.interface";
import {REQUEST_SERVICE_IMPL} from "../../../core/services/requests-service-impl.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-reactions-form',
  templateUrl: './user-reactions-form.component.html',
  styleUrls: ['./user-reactions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserReactionsFormComponent {
  constructor(public dataService: DataService, @Inject(REQUEST_SERVICE_IMPL) private requestsService: RequestsService,
              private formBuilder: FormBuilder) {}

  @Input() selectedContentItem!: IContent;

  didYouReadOptions = DidYouReadOptions;
  didYouReadOptionsDefaultAnswer = DidYouReadOptionsDefaultAnswer;
  didYouReadOptionsKeys = Object.keys(DidYouReadOptions);
  didYouReadOptionsValues = Object.values(DidYouReadOptions);
  defaultResidence = ResidenceDefault;
  residenceOptions = ResidenceOptions;
  yourThoughtsDefault = YourThoughtsDefault;

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
        this.requestsService.getFromFirebase();
        this.userReactionForm.reset();
      }
    });
  }
}