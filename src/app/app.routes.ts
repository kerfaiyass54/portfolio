import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";

export const routes: Routes = [


  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: SkillsComponent,
    path: 'skills'
  },
  {
    component: ProjectsComponent,
    path: 'projects'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }


];


