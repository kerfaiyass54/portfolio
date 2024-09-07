import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router:Router){}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
 

}
