import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects: any[] = [
    {
      "name": "She-Devs Kenya"
    },
    {
      "name": "Music Player"
    },
    {
      "name": "Real Estate Management"
    }
  ];

}
