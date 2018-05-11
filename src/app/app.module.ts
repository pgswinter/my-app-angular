import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { TestFormOneComponent } from './test-form-one/test-form-one.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    TestFormOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: 'mail',useClass:MailService},
    {provide: 'api',useValue:"http://localhost:3000/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
