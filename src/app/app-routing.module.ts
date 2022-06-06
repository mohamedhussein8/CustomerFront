import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Components/Admin-Side/admin-layout/admin-layout.component';
import { CustomerDashboardComponent } from './Components/Admin-Side/customer-dashboard/customer-dashboard.component';
import { HomeAdminComponent } from './Components/Admin-Side/home-admin/home-admin.component';

const routes: Routes = [
  {path:'', component:AdminLayoutComponent,children:[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeAdminComponent },
    {path:'customer',component:CustomerDashboardComponent},
 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
