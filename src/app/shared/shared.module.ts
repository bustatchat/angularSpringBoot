import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from './modules/material-import.module';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MaterialImportModule,
    PasswordInputComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SharedModule { }
