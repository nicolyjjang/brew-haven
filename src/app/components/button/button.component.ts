import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Clique aqui.'
  @Input() pdfPath: string = ''
  @Input() sectionId: string = ''

  handleClick(){
    if(this.pdfPath){
      this.openPdf()
    }
  }

  openPdf(){
    if(this.pdfPath){
      window.open(this.pdfPath, '_blank')
    }
  }

  scrollToSection(){
    if(this.sectionId){
      const element = document.getElementById(this.sectionId)

      if(element){
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }
}