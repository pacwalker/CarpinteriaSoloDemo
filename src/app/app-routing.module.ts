import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { SiteComponent } from './content/site/site.component';
import { WorkComponent } from './content/work/work.component';
import { ShopComponent } from './content/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: SiteComponent},
  { path: 'nosotros', component: AboutComponent},
  { path: 'trabajo', component: WorkComponent},
  { path: 'contactanos', component: ContactComponent  },
  { path: 'tienda', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
