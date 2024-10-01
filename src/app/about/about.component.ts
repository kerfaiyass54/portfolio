import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Run the function once on init to check for elements already in view
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const elements = document.querySelectorAll('.item'); // Elements to animate
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      // Check if element is in view
      if (elementTop < windowHeight - 100) { // Adjust this offset as needed
        el.classList.add('animate');
      }
    });
  }
}
