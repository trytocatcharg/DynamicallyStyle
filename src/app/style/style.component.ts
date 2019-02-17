import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
  //https://scotch.io/tutorials/all-the-ways-to-add-css-to-angular-2-components
})
export class StyleComponent implements OnInit {

  
  cssUrl: string;
 
  constructor(public sanitizer: DomSanitizer) {
 
  }

  ngOnInit() {
    const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
 
    const n = randomIntegerInRange(1, 100) % 2;
    this.cssUrl = n % 2 === 0 ? 'https://cdn.pannellum.org/2.4/pannellum.css' : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  }
}

  