import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from "../../components/button/button.component";
import { ButtonOutlineComponent } from '../../components/button-outline/button-outline.component';
import { CardComponent } from '../../components/card/card.component';
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent,
    ButtonComponent, ButtonComponent, ButtonOutlineComponent, CardComponent, BannerComponent],
    standalone: true,
    templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
