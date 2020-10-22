import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  content: string;

  constructor(public translate: TranslateService, private userService: UserService) {
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
