import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, CommonModule, HeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  constructor(private router:Router){}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  homePage(){
    this.navigateTo('/about');
  }

  projectPage(){
    this.navigateTo('/projects');
  }

  skillsPage(){
    this.navigateTo('/skills');
  }

  contactPage(){
    this.navigateTo('/contact');
  }


}

