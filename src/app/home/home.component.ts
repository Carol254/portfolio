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

  myServices: any[] = [
    {
      "img":"",
      "title": "Web Development",
      "description":"I love creating websites"
    },
    {
      "img":"",
      "title": "UI/UX Design",
      "description":""
    },
    {
      "img":"",
      "title": "Mobile App Development",
      "description":""
    },
    {
      "img":"",
      "title": "Technical Writing",
      "description":""
    }
  ];

}
