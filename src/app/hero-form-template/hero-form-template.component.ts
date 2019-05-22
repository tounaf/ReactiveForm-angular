import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent implements OnInit {

  hero = new Hero(18, 'Dr IQ', '', 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }

}
