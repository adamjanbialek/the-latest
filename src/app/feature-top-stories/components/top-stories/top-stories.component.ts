import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IContent} from "../../../shared/models/icontent.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopStoriesComponent implements OnInit {
  constructor(public dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  type = this.activatedRoute.snapshot.paramMap.get('type')!;
  loaded$!: Observable<IContent[]>;

  ngOnInit() {
    this.loaded$ = this.dataService.passLoadedData();
  }

  toContentItem(i: number) {
    this.router.navigate(['/content/', this.type, i]);
  }
}
