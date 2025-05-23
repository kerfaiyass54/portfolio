import {Component, OnInit} from '@angular/core';
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-programming-languages',
  standalone: true,
  imports: [
    NgbPopover
  ],
  templateUrl: './programming-languages.component.html',
  styleUrl: './programming-languages.component.css'
})
export class ProgrammingLanguagesComponent implements OnInit{

  ngOnInit(){

  }

}
