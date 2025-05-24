import { Component } from '@angular/core';
import {AboutMeSectionComponent} from "../about-me-section/about-me-section.component";
import {EducatinSectionComponent} from "../educatin-section/educatin-section.component";
import {NgIf} from "@angular/common";
import {VolunteeringSectionComponent} from "../volunteering-section/volunteering-section.component";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        AboutMeSectionComponent,
        EducatinSectionComponent,
        NgIf,
        VolunteeringSectionComponent
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  noButton = true;
  side = false;
  academic = false;

  showPersonal() {

  }

  showAcademic() {

  }
}
