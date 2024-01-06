import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IContent} from "../../models/icontent.model";

@Component({
  selector: 'app-opinion-output',
  templateUrl: './opinion-output.component.html',
  styleUrls: ['./opinion-output.component.scss']
})
export class OpinionOutputComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  @Input() data!: IContent[] | null;

  id = this.activatedRoute.snapshot.params['id'];
}
