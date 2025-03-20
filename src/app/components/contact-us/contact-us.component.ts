import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: 'contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  @Input() title: string = ''; 
  @Input() text: string = ''; 
  @Input() btn: string = '';  
  @Input() pdfPath: string = '';
  @Input() sectionId: string = '' 

  handleClick() {
    console.log('Botão clicado!')
  }
}