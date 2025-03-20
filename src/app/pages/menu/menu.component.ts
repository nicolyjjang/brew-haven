import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule, NgClass } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-menu',
  imports: [HeaderComponent, NgClass, CardComponent,
    RouterOutlet, CommonModule, FooterComponent],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [HttpClient]
})
export class MenuComponent implements OnInit{
  currentTitle: string = 'Cafés e chás quentes'
  currentCards: any[] = []

  private dbUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient){}

  fetchCards(category:string){
    this.http.get(`${this.dbUrl}${category}`).subscribe((data: any) => {
      this.currentCards = data;
    })
  }

  updateTitle(newTitle: string, category: string) {
    this.currentTitle = newTitle;
    this.fetchCards(category);
  }

  ngOnInit(){
    this.updateTitle(this.currentTitle, 'cafeQuente')
  }
}
