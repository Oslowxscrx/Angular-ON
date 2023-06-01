import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthRoutingModule } from './auth/auth-routing/auth-routing.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule, AuthRoutingModule, PagesModule],
})
export class AppRoutingModule {}
