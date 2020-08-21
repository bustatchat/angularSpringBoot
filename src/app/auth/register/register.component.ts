import { Component, OnInit } from '@angular/core';
import { emailValidator } from '../../shared/validators/validators';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { errorCodes } from '../../../../src/main/java/com/example/demo/api/config/errorCodes';
import { Console } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registrationDone = false;
  loading = false;
  uidError = null;
  mailError = null;

  private trimFormFields() {
    this.registerForm.value.email = this.registerForm.value.email.trim();
    this.registerForm.value.profile.firstName = this.registerForm.value.profile.firstName.trim();
    this.registerForm.value.profile.lastName = this.registerForm.value.profile.lastName.trim();
    if (this.registerForm.value.uid) {
      this.registerForm.value.uid = this.registerForm.value.uid.trim();
    }
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateForm();
  }

  clearAllErrors() {
    this.mailError = null;
  }

  register() {
    this.clearAllErrors();
    this.loading = true;
    /*this.showProgress.toggleLoadingGlobal(this.loading);*/

    this.registerForm.value.email = this.registerForm.value.email.replace(/\s/g, '').toLowerCase();
    this.trimFormFields();
    console.warn(this.registerForm.value);
    /*this.authenticationService.register(this.registerForm.value).then(
      (val) => {
        this.registrationDone = true;
      })
      .catch((err) => {
        this.handleError(err);
      })
      .then(() => {
        this.loading = false;
        this.showProgress.toggleLoadingGlobal(this.loading);
      });*/
  }

  private handleError(err) {
    switch (err.error.message) {
      case errorCodes.mail.duplicate.code: {
        this.mailError = errorCodes.mail.duplicate.text;
        break;
      }
      case errorCodes.mail.noTeacher.code: {
        this.mailError = errorCodes.mail.noTeacher.text;
        break;
      }
      case errorCodes.duplicateUid.code: {
        this.uidError = errorCodes.duplicateUid.text;
        break;
      }
      default: {
        /*this.snackBar.open('Registration failed');*/
      }
    }
  }

  generateForm() {
    this.registerForm = this.formBuilder.group({
      profile: this.formBuilder.group({
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
        lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
      }),
      email: ['', Validators.compose([emailValidator, Validators.required])],
    });
  }
}
