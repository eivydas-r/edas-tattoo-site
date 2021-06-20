import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("Edas Tattoo: Designs");
  }

  ngOnInit(): void {
  }

}
