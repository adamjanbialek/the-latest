import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-opinion-output',
  templateUrl: './opinion-output.component.html',
  styleUrls: ['./opinion-output.component.scss']
})
export class OpinionOutputComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  @Input() data!: any;

  id = this.activatedRoute.snapshot.params['id'];
}
