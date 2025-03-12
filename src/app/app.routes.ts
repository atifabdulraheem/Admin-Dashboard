import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SettingComponent } from './pages/setting/setting.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
