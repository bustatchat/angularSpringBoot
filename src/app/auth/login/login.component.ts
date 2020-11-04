import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  loginForm: FormGroup;
  loading = false;

  constructor(private router: Router,
              private formBuider: FormBuilder,
              private authenticationService: AuthenticationService,
              ) { }

  ngOnInit() {
    this.generateForm();
  }

  login() {
    /*each space character is being replaced, character by character, with the empty string*/
    this.loginForm.value.email = this.loginForm.value.username.replace(/\s/g, '').toLowerCase();
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).then(
      () => {

        /*if (this.authGuard.redirectUrl) {
          this.router.navigate([this.authGuard.redirectUrl])
            .then(() => this.authGuard.redirectUrl = null)
            .catch(e => this.router.navigate(['/']));
        } else {
          this.router.navigate(['/']);
        }
        this.showProgress.toggleLoadingGlobal(false);
        this.loading = false;

        this.snackBar.open('auth.login.success');*/
        this.router.navigate(['/']);
      })
      .catch(response => {
       /* this.showProgress.toggleLoadingGlobal(false);
        this.loading = false;

        this.snackBar.open('auth.login.failed.' + response.error.message);*/
      });
  }

  generateForm() {
    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
