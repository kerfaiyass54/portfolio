import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgForOf, NgIf} from "@angular/common";
import {AboutMeSectionComponent} from "../about-me-section/about-me-section.component";
import {EducatinSectionComponent} from "../educatin-section/educatin-section.component";
import {VolunteeringSectionComponent} from "../volunteering-section/volunteering-section.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbModule, NgForOf, NgIf, AboutMeSectionComponent, EducatinSectionComponent, VolunteeringSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aboutMe = false;
  volunteer = false;
  educ = false;

  constructor() { }

  ngOnInit(): void {



  }


  showAbout(){
    this.aboutMe = true;
    this.volunteer = false;
    this.educ = false;
  }

  showEduc(){
    this.aboutMe = false;
    this.volunteer = false;
    this.educ = true;
  }

  showVolunteer(){
    this.aboutMe = false;
    this.volunteer = true;
    this.educ = false;
  }








}
