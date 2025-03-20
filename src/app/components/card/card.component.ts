import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = 'Nome';
  @Input() price: string = 'R$ 00,00';
  @Input() image: string = '';
  @Input() badgeImage: string = '';
}
