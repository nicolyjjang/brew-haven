import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-outline',
  imports: [],
  standalone: true,
  templateUrl: './button-outline.component.html',
  styleUrl: './button-outline.component.scss',
})
export class ButtonOutlineComponent {
  @Input() text: string = 'Clique aqui.';
  @Input() routePath: string = '';
  @Input() sectionId: string = '';

  constructor(private router: Router) {}

  handleClick() {
    if (this.sectionId) {
      this.scrollToSection();
    }
  }

  navigateToRoute() {
    if (this.routePath) {
      this.router.navigate([this.routePath]);
    }
  }

  scrollToSection() {
    if (this.sectionId) {
      const element = document.getElementById(this.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
