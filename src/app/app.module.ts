import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/commonSignup.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './components/login/otp/otp.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { agencyModule } from './modules/agency/agency.module';
import { AgencyHomeComponent } from './modules/agency/components/agency-home/agency-home.component';
import { JwtInterceptor } from './common.intecepter';

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    LoginComponent,
    NotFoundComponent,
    AgencyHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    agencyModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
