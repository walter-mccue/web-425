/**
 * Title: app.routing.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: app routing for the secured-profile-app project
*/

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
