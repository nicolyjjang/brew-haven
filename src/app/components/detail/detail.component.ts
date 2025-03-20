import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() image: string  = '';
  @Input() title: string = '';
  @Input() text: string = ''

}
