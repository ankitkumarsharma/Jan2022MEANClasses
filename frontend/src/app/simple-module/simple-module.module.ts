import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleModuleRoutingModule } from './simple-module-routing.module';
import { A1Component } from './a1/a1.component';


@NgModule({
  declarations: [
    A1Component
  ],
  imports: [
    CommonModule,
    SimpleModuleRoutingModule
  ]
})
export class SimpleModuleModule { }
