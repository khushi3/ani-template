import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { BlankPageComponent } from './blankPage.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [BlankPageComponent],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
