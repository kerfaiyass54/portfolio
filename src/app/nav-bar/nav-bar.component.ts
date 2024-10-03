import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbModule, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isHome = true;
  isProjects = false;
  isSkills = false;
  isContact = false;

  constructor(private router:Router){}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  homePage(){
    this.isHome=true;
    this.isProjects = false;
    this.isSkills = false;
    this.isContact = false;
  }

  projectPage(){
    this.isHome=false;
    this.isProjects = true;
    this.isSkills = false;
    this.isContact = false;
  }

  skillsPage(){
    this.isHome=false;
    this.isProjects = false;
    this.isSkills = true;
    this.isContact = false;
  }

  contactPage(){
    this.isHome=false;
    this.isProjects = false;
    this.isSkills = false;
    this.isContact = true;
  }
 

}import { CommonModule } from '@angular/common';

