import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

/* content item's individual component displayed after it its chosen in the list of content items */

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentItemComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  @Input() data!: any;

  id = this.activatedRoute.snapshot.params['id'];
}
