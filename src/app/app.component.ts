import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  content: string;

  constructor(private router: Router,
              public authenticationService: AuthenticationService,
              public translate: TranslateService,
              public userService: UserService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.authenticationService.reloadUser();
    const lang = this.translate.getDefaultLang();
    this.translate.use(lang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn;
  }

  logout() {
    this.authenticationService.logout();
  }

  specialContainerStyle(): string {
    const routeTest = /^(\/|\/login|\/register|\/reset|\/activation-resend)$/.test(this.router.url);

    return (routeTest && !this.isLoggedIn()) ? 'special-style' : '';
  }

}
