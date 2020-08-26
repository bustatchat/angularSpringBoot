import { Component, OnInit } from '@angular/core';
import { emailValidator } from '../../shared/validators/validators';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { errorCodes } from '../../../../src/main/java/com/example/demo/api/config/errorCodes';
import { UserService } from 'src/app/shared/services/user.service';

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
    this.registerForm.value.first_name = this.registerForm.value.first_name.trim();
    this.registerForm.value.last_name = this.registerForm.value.last_name.trim();
    if (this.registerForm.value.uid) {
      this.registerForm.value.uid = this.registerForm.value.uid.trim();
    }
  }

  constructor(private formBuilder: FormBuilder,
              private userService: UserService
    ) { }

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
    this.userService.createItem(this.registerForm.value)
    .then(() => {
        this.registrationDone = true;
      })
      .catch((err) => {
        this.handleError(err);
      })
      .then(() => {
        this.loading = false;
        /*this.showProgress.toggleLoadingGlobal(this.loading);*/
      });
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
      default: {
        /*this.snackBar.open('Registration failed');*/
      }
    }
  }

  generateForm() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
      last_name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
      email: ['', Validators.compose([emailValidator, Validators.required])],
    });
  }
}
