import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {Article} from "../../models/article.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {RequestsService} from "../../../core/services/requests.service";
import {UserReaction} from "../../../shared/models/user-reaction.model";

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss']
})
export class IndividualStoryComponent implements OnInit {
  constructor(public dataService: DataService, public requestsService: RequestsService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  selectedArticle: Article = this.dataService.articlesToDisplay[0];

  ngOnInit() {
    this.areArticlesLoaded();
    this.getArticle();
  }

  areArticlesLoaded() {
    if(this.dataService.articlesToDisplay.length === 0) {
      this.router.navigate(['top-stories']);
    }
  }

  getArticle() {
    this.selectedArticle = this.dataService.articlesToDisplay[this.activatedRoute.snapshot.params['id']];
  }

  userReaction: UserReaction = {
    username: '',
    yourThoughts: '',
    didYouRead: '',
    residence: '',
  }

  @ViewChild('f') reactionForm: NgForm | null = null;

  suggestUsername() {
    this.reactionForm?.form.patchValue({
      'username': 'anonymous'
    });
  };

  didYouRead = 'no';

  residenceOptions = ['yes', 'no'];

  defaultResidence = 'no';

  yourThoughts = '';

  onSubmit() {
    this.userReaction.username = this.reactionForm?.value.username;
    this.userReaction.yourThoughts = this.reactionForm?.value.yourThoughts;
    this.userReaction.didYouRead = this.reactionForm?.value.questions.didYouRead;
    this.userReaction.residence = this.reactionForm?.value.questions.residence;
    this.requestsService.postRequest(this.selectedArticle, this.userReaction).subscribe();
  }
}
