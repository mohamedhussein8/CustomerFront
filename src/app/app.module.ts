import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './Components/Admin-Side/admin-header/admin-header.component';
import { AdminLayoutComponent } from './Components/Admin-Side/admin-layout/admin-layout.component';
import { AdminSidenavComponent } from './Components/Admin-Side/admin-sidenav/admin-sidenav.component';
import { HomeAdminComponent } from './Components/Admin-Side/home-admin/home-admin.component';
import { CustomerDashboardComponent } from './Components/Admin-Side/customer-dashboard/customer-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatMenuModule}from '@angular/material/menu';
import{MatIconModule}from '@angular/material/icon';
import{MatDividerModule}from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DialogCustomerComponent } from './Components/Admin-Side/dialog-customer/dialog-customer.component';
import { CustomerDetailsComponent } from './Components/Admin-Side/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminLayoutComponent,
    AdminSidenavComponent,
    HomeAdminComponent,
    CustomerDashboardComponent,
    DialogCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
