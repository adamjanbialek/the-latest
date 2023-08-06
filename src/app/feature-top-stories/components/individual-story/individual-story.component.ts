import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {IContent} from "../../../shared/models/icontent.model";
import {RequestsService} from "../../../core/services/requests.service";

@Component({
  selector: 'app-individual-story',
  templateUrl: './individual-story.component.html',
  styleUrls: ['./individual-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualStoryComponent implements OnInit {
  constructor(private dataService: DataService,
              private requestsService: RequestsService, private activatedRoute: ActivatedRoute) {
  }

  loadedContent!: IContent;
  id = this.activatedRoute.snapshot.params['id'];

  ngOnInit() {
    this.isContentLoaded();
    this.displayContentItem();
    this.setSelectedItem();
  }

  isContentLoaded() {
    if(this.dataService.loadedContent.length === 0) {
      this.dataService.getContentIfArrayIsEmpty().subscribe({
        next: res => {
          this.dataService.loadedContent = res;
          this.loadedContent = this.dataService.loadedContent[this.id];
        }
      });
    }
  }

  displayContentItem() {
    this.loadedContent = this.dataService.loadedContent[this.id];
  }

  setSelectedItem() {
    this.dataService.selectedContentItem = this.loadedContent;
  }
}
