import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Div1Component} from './div1/div1.component';
import {Div2Component} from './div2/div2.component';
import {Div3Component} from './div3/div3.component';

const routes: Routes = [
    { path: 'div1', component: Div1Component },
    { path: 'div2', component: Div2Component },
    { path: 'div3', component: Div3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
