import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from "../../components/detail/detail.component";
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, DetailComponent, MapComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
