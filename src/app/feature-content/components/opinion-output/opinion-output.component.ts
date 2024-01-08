import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-opinion-output',
  templateUrl: './opinion-output.component.html',
  styleUrls: ['./opinion-output.component.scss']
})
export class OpinionOutputComponent {
  @Input() data!: any;
}
