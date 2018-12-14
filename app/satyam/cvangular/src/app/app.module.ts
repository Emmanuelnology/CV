import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { TopsearchbarComponent } from './topsearchbar/topsearchbar.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MydetailsComponent,
    TopsearchbarComponent,
    ImagecarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
