import {Component, ViewChild} from '@angular/core';
import {UserReaction} from "../../models/user-reaction.model";
import {NgForm} from "@angular/forms";
import {DataService} from "../../../core/services/data.service";
import {RequestsService} from "../../../core/services/requests.service";

@Component({
  selector: 'app-user-reactions-form',
  templateUrl: './user-reactions-form.component.html',
  styleUrls: ['./user-reactions-form.component.scss']
})
export class UserReactionsFormComponent {
  constructor(public dataService: DataService, private requestsService: RequestsService) {
  }

  userReaction: UserReaction = {
    username: '',
    yourThoughts: '',
    didYouRead: '',
    residence: '',
  }

  @ViewChild('f') reactionForm!: NgForm;

  suggestUsername() {
    this.reactionForm.form.patchValue({
      'username': 'anonymous'
    });
  };

  didYouRead = 'no';

  residenceOptions = ['yes', 'no'];

  defaultResidence = 'no';

  yourThoughts = '';

  onSubmit() {
    this.userReaction.username = this.reactionForm.value.username;
    this.userReaction.yourThoughts = this.reactionForm.value.yourThoughts;
    this.userReaction.didYouRead = this.reactionForm.value.questions.didYouRead;
    this.userReaction.residence = this.reactionForm.value.questions.residence;
    this.requestsService.postRequest(this.dataService.selectedArticle, this.userReaction).subscribe({
      complete: () => {
        this.requestsService.getFromFirebase();
      }
    });
    this.reactionForm.reset();
  }
}
