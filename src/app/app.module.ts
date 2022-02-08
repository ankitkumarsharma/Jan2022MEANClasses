import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DescPipe } from './pipes/desc.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentInputComponent } from './component-interaction/input/parent-input/parent-input.component';
import { ChildInputComponent } from './component-interaction/input/child-input/child-input.component';
import { OutputC1Component } from './component-interaction/output/output-c1/output-c1.component';
import { OutputC2Component } from './component-interaction/output/output-c2/output-c2.component';
import { ViewchildC1Component } from './component-interaction/view-child/viewchild-c1/viewchild-c1.component';
import { ViewchildC2Component } from './component-interaction/view-child/viewchild-c2/viewchild-c2.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { LoginComponent } from './login/login.component';
import { SessionComponent } from './session/session.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CubePipe,
    CustomNamePipe,
    PageNotFoundComponent,
    P1Component,
    P2Component,
    P3Component,
    DescPipe,
    ParentInputComponent,
    ChildInputComponent,
    OutputC1Component,
    OutputC2Component,
    ViewchildC1Component,
    ViewchildC2Component,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    LoginComponent,
    SessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
