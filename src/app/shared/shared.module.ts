import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialImportModule} from './modules/material-import.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialImportModule,
  ],
  exports: [
    MaterialImportModule,
  ],
})
export class SharedModule { }
