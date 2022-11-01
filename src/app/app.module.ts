import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { LogoComponent } from './logo/logo.component';

import { NgxLogoModule } from '@vgaidadei/ngx-logo'

import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    //LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgxLogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
