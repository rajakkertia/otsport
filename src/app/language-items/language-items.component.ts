import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-items',
  templateUrl: './language-items.component.html',
  styleUrls: ['./language-items.component.scss'],
})
export class LanguageItemsComponent implements OnInit {
  languagesToggled = false;

  langauages = ["UK","FR", "DE", "IT", "GE", "ES"];

  constructor() {}

  ngOnInit(): void {}

  toggleLangaugeList() {
    this.languagesToggled = !this.languagesToggled;
  }
}
