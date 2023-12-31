import { ButtonAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { CarouselAllModule } from '@syncfusion/ej2-angular-navigations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ CarouselAllModule, ButtonAllModule, SwitchAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
