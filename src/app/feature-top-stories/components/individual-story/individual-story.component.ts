import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
              private requestsService: RequestsService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
  }

  loadedContent!: IContent;
  id = this.activatedRoute.snapshot.params['id'];

  ngOnInit() {
    this.isContentLoaded();
    this.displayContentItem();
  }

  isContentLoaded() {
    if(this.dataService.loadedContent.length === 0) {
      this.dataService.getContentIfArrayIsEmpty().subscribe({
        next: res => {
          this.dataService.loadedContent = res;
        }, complete: () => {
          this.loadedContent = this.dataService.loadedContent[this.id];
          this.setSelectedItem();
        }
      });
    }
  }

  displayContentItem() {
    this.loadedContent = this.dataService.loadedContent[this.id];
    this.setSelectedItem();
  }

  setSelectedItem() {
    this.dataService.selectedContentItem = this.loadedContent;
  }
}
