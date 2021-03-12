import { AuthInterceptor } from './services/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { MarticleModule } from './marticle/marticle.module';
import { ResumePipe } from './pipes/resume.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarticleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
