import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbModule],
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
    this.volunteer = true;
    this.educ = false;
  }

  showVolunteer(){
    this.aboutMe = false;
    this.volunteer = false;
    this.educ = true;
  }








}
