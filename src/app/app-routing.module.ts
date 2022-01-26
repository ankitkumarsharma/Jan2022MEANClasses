import { ChildInputComponent } from './component-interaction/input/child-input/child-input.component';
import { ParentInputComponent } from './component-interaction/input/parent-input/parent-input.component';
import { P1Component } from './product/p1/p1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P2Component } from './product/p2/p2.component';
import { P3Component } from './product/p3/p3.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'product', children:[
    {path:'',redirectTo:'p1', pathMatch:'full'},
    {path:'p1', component:P1Component},
    {path:'p2', component:P2Component},
    {path:'p3', component:P3Component},
  ]},
  {path:'input', component: ParentInputComponent},
  {path:'inputChild', component: ChildInputComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
