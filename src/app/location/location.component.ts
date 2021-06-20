import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("Edas Tattoo: Location");
  }

  ngOnInit(): void {
  }

}
