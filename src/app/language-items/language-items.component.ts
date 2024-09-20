import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-items',
  templateUrl: './language-items.component.html',
  styleUrls: ['./language-items.component.scss'],
})
export class LanguageItemsComponent implements OnInit {
  languagesToggled = false;

  selectedLanguage:string;

  langauages = ["EN","GE"];

  constructor( private translate: TranslateService) {
    this.selectedLanguage = localStorage.getItem('language') || 'EN';
  }

  ngOnInit(): void {
    this.translate.addLangs(['EN', 'GE']);

    this.translate.setDefaultLang('EN');
    this.translate.use(this.selectedLanguage);

  }

  toggleLangaugeList() {
    this.languagesToggled = !this.languagesToggled;
  }

  switchLanguage(lang: string) {
    this.selectedLanguage = lang;
    localStorage.setItem('language', lang);
    this.translate.use(lang);

  }
}
