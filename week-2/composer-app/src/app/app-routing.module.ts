/**
 * Title: app-routing.module.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: routing module for the composer-app project
*/

// import statements

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// routes path

const routes: Routes = [
  {
    path: "",
    component: ComposerListComponent
  },
  {
    path: "composer-list",
    component: ComposerListComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ComposerListComponent, AboutComponent, ContactComponent]
