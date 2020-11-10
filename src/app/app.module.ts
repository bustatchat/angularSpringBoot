import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BackendService } from './shared/services/backend.service';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/services/user.service';
import { AuthInterceptorProvider } from '../app/helper/auth.interceptor';
import { UserModule } from './user/user.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    BackendService,
    UserService,
    AuthInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
