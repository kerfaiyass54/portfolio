import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import {MainPageComponent} from "./main-page/main-page.component";


export const routes: Routes = [
  {
    component: AboutComponent,
    path:''
  }
,
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


