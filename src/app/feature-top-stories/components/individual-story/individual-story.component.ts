import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {IContent} from "../../../shared/models/icontent.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualStoryComponent implements OnInit {
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
  }

  id = this.activatedRoute.snapshot.params['id'];
  loaded$!: Observable<IContent[]>;

  ngOnInit() {
    this.loaded$ = this.dataService.passLoadedData();
  }
}
