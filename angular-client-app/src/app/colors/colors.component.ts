import { Component, OnInit } from '@angular/core';

import { Color } from '../color';
import { ColorService } from '../colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html'
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

  delete(color: Color): void {
    this.colors = this.colors.filter(h => h !== color);
    this.colorService.deleteColor(color).subscribe(color => {
      const index = this.colors.indexOf(color, 0);
      if (index > -1) {
        this.colors.splice(index, 1);
     }
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.colorService.addColor({ name } as Color)
      .subscribe(color => {
        this.colors.push(color);
      });
  }
}
