import { Component } from '@angular/core';
import {AboutMeSectionComponent} from "../about-me-section/about-me-section.component";
import {EducatinSectionComponent} from "../educatin-section/educatin-section.component";
import {NgIf} from "@angular/common";
import {VolunteeringSectionComponent} from "../volunteering-section/volunteering-section.component";
import {SideProjectsComponent} from "../side-projects/side-projects.component";
import {AcademicProjectsComponent} from "../academic-projects/academic-projects.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AboutMeSectionComponent,
    EducatinSectionComponent,
    NgIf,
    VolunteeringSectionComponent,
    SideProjectsComponent,
    AcademicProjectsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  noButton = true;
  side = false;
  academic = false;

  showPersonal() {
    this.noButton = false;
    this.side = true;
    this.academic = false;
  }

  showAcademic() {
    this.noButton = false;
    this.side = false;
    this.academic = true;
  }
}
