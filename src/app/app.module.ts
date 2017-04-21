import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KandidaatFormComponent } from './kandidaat-form.component';
import { TestComponent } from './test.component';

import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { UploadModule } from '@progress/kendo-angular-upload';
import { MockBackend } from '@angular/http/testing';


@NgModule({
  declarations: [
    AppComponent,
    KandidaatFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    FormsModule,
    HttpModule,
    DateInputsModule,
    UploadModule
  ],
  providers: [MockBackend],
  bootstrap: [AppComponent]
})
export class AppModule { }
