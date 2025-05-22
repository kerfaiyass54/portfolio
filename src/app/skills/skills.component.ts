import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {ProgrammingLanguagesComponent} from "../programming-languages/programming-languages.component";
import {ItToolsComponent} from "../it-tools/it-tools.component";
import {FrameworksComponent} from "../frameworks/frameworks.component";
import {LanguagesComponent} from "../languages/languages.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgIf,
    ProgrammingLanguagesComponent,
    ItToolsComponent,
    FrameworksComponent,
    LanguagesComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  noButton = true;
  prog = false;
  tools = false;
  frame = false;
  lang = false;



  showLanguages() {
    this.noButton = false;
    this.prog = false;
    this.tools = false;
    this.frame = false;
    this.lang = true;
  }

  showProg() {
    this.noButton = false;
    this.prog = true;
    this.tools = false;
    this.frame = false;
    this.lang = false;
  }

  showFrame() {
    this.noButton = false;
    this.prog = false;
    this.tools = false;
    this.frame = true;
    this.lang = false;
  }

  showTools() {
    this.noButton = false;
    this.prog = false;
    this.tools = true;
    this.frame = false;
    this.lang = false;
  }
}
