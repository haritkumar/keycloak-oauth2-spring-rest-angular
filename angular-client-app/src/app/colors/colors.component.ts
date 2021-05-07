import { Component, OnInit } from '@angular/core';

import { Color } from '../color';
import { ColorService } from '../colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors: Color[];

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.getColors();
  }

  getColors(): void {
    this.colorService.getColors()
    .subscribe(colors => this.colors = colors);
  }

 

}
