import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./portfoliocomponents/about/about.component";
import { ContactComponent } from "./portfoliocomponents/contact/contact.component";
import { ServicesComponent } from "./portfoliocomponents/services/services.component";
import { HeaderComponent } from "./portfoliocomponents/header/header.component";
import { HeroheaderComponent } from "./portfoliocomponents/heroheader/heroheader.component";
import { SkilllsComponent } from "./portfoliocomponents/skills/skillls.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ContactComponent, ServicesComponent, HeaderComponent, HeroheaderComponent, SkilllsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
 
 

}  