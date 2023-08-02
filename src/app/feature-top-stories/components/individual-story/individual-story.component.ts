import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {Article} from "../../models/article.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss']
})
export class IndividualStoryComponent implements OnInit {
  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  selectedArticle: Article = {title: '', abstract: '', link: '', image: ''};

  ngOnInit() {
    this.areArticlesLoaded();
    this.getArticle();
    this.passOnTheArticle();
  }

  areArticlesLoaded() {
    if(this.dataService.articlesToDisplay.length === 0) {
      this.router.navigate(['top-stories']);
    }
  }

  getArticle() {
    this.selectedArticle = this.dataService.articlesToDisplay[this.activatedRoute.snapshot.params['id']];
  }

  passOnTheArticle() {
    this.dataService.selectedArticle = this.selectedArticle;
  }
}
