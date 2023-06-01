import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable, Type } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
//import { LoginComponent } from 'src/app/auth/login/login.component';
//import { RegisterComponent } from 'src/app/auth/register/register.component';
import { CategoryComponent } from '../category/category.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductComponent } from '../product/product.component';
import { PagesComponent } from '../pages.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing/auth-routing.module';

const routes: Routes = [
  // rutas protegidas
  {
    path: 'dashboard/',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
    ],
  },
  //{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [RouterModule, AuthRoutingModule, PagesRoutingModule],
})
export class PagesRoutingModule {}
