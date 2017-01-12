import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BlankPageComponent } from './blankPage.component';
import { RestService } from  './rest.service';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [BlankPageComponent],

     providers: [
    RestService
  ],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
