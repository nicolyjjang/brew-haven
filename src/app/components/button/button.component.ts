import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Clique aqui.';
  @Input() pdfPath: string = '';
  @Input() sectionId: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (this.pdfPath) {
      this.openPdf();
    } else if (this.sectionId) {
      this.scrollToSection();
    }
    this.onClick.emit();
  }

  openPdf() {
    if (this.pdfPath) {
      window.open(this.pdfPath, '_blank');
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