import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { ColorService } from '../colors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  colors: Color[] = [];

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.getColors();
  }

  getColors(): void {
    this.colorService.getColors()
      .subscribe(colors => this.colors = colors.slice(1, 6));
  }
}
