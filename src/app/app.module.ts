import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CubePipe } from './pipes/cube.pipe';
import { CustomNamePipe } from './pipes/custom-name.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { P1Component } from './product/p1/p1.component';
import { P2Component } from './product/p2/p2.component';
import { P3Component } from './product/p3/p3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CubePipe,
    CustomNamePipe,
    PageNotFoundComponent,
    P1Component,
    P2Component,
    P3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
