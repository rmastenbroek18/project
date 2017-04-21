import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { IntlModule } from '@progress/kendo-angular-intl';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KandidaatFormComponent } from './kandidaat-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KandidaatFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
