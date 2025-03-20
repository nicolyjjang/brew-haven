import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactUsComponent, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent { }