import { SessionComponent } from './session/session.component';
import { LoginComponent } from './login/login.component';
import { A1Component } from './simple-module/a1/a1.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ViewchildC1Component } from './component-interaction/view-child/viewchild-c1/viewchild-c1.component';
import { OutputC1Component } from './component-interaction/output/output-c1/output-c1.component';
import { ChildInputComponent } from './component-interaction/input/child-input/child-input.component';
import { ParentInputComponent } from './component-interaction/input/parent-input/parent-input.component';
import { P1Component } from './product/p1/p1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { P2Component } from './product/p2/p2.component';
import { P3Component } from './product/p3/p3.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'product', canActivate:[AuthGuard], children:[
    {path:'',redirectTo:'p1', pathMatch:'full'},
    {path:'p1', component:P1Component},
    {path:'p2', component:P2Component},
    {path:'p3', component:P3Component},
  ]},
  {path:'input', component: ParentInputComponent},
  {path:'inputChild', component: ChildInputComponent},
  {path:'output', component: OutputC1Component},
  {path:'viewchild', component: ViewchildC1Component},
  {path:'forms', component: ReactiveFormsComponent},
  {path:'a1', component: A1Component},
  {path:'session', component: SessionComponent},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
