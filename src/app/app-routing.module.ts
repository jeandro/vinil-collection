import { GravadoraComponent } from './gravadora/gravadora.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './util/authentication.guard';
//import { DonationComponent } from './donation/donation.component';
import { LandPageComponent } from './land-page/land-page.component';
//import { LoginComponent } from './login/login.component';
import { CityComponent } from './city/city.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandPageComponent },
//  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UserComponent},
  { path: 'gravadora', component: GravadoraComponent},
  { path: 'cidade', component: CityComponent },

  {
    path: 'a/gravadora',
    component: GravadoraComponent,
   // pathMatch: 'full'
  },

  {
    path: 'a/usuario',
    component: UserComponent,
   // canActivate: [AuthenticationGuard],
  },

 {
  path: 'a/cidade',
  component: CityComponent,
 // pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
