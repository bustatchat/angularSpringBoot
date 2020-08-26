import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    const lang = this.translate.getDefaultLang();
    this.translate.use(lang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
