import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'Assignment 4 by Nenad Bulatovic (nenad.bulatovic@gmail.com)';

  constructor() { }

  ngOnInit() {
  }

}