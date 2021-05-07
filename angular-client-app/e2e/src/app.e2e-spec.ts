'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

const expectedH1 = 'Tour of Colors';

class Color {
  hexcode: string;
  name: string;

  // Factory methods

  // Color from string formatted as '<hexcode> <name>'.
  static fromString(s: string): Color {
    return {
      hexcode: s.substr(0, s.indexOf(' ')),
      name: s.substr(s.indexOf(' ') + 1),
    };
  }

  // Color from Color list <li> element.
  static async fromLi(li: ElementFinder): Promise<Color> {
      let stringsFromA = await li.all(by.css('a')).getText();
      let strings = stringsFromA[0].split(' ');
      return { hexcode: strings[0], name: strings[1] };
  }

  // Color hexcode and name from the given detail element.
  static async fromDetail(detail: ElementFinder): Promise<Color> {
    // Get color hexcode from the first <div>
    let _id = await detail.all(by.css('div')).first().getText();
    // Get name from the h2
    let _name = await detail.element(by.css('h2')).getText();
    return {
        hexcode: _id.substr(_id.indexOf(' ') + 1),
        name: _name.substr(0, _name.lastIndexOf(' '))
    };
  }
}

