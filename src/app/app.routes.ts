import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'contact', component:ContactComponent
    },
    {
        path: 'skills', component:SkillsComponent
    },
    {
        path: 'projects', component:ProjectsComponent
    },
    {
        path: 'about', component:AboutComponent
    },
    { path: '', redirectTo: '/about', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/about' } 
];


