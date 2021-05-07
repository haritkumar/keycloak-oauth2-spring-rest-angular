import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Color } from '../color';
import { ColorService }  from '../colors.service';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: [ './color-detail.component.css' ]
})
export class ColorDetailComponent implements OnInit {
  @Input() color: Color;

  constructor(
    private route: ActivatedRoute,
    private colorService: ColorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getColor();
  }

  getColor(): void {
    const hexcode = this.route.snapshot.paramMap.get('hexcode');
    this.colorService.getColor(hexcode)
      .subscribe(color => this.color = color);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    //this.colorService.updateColor(this.color).subscribe(() => this.goBack());
  }
}
