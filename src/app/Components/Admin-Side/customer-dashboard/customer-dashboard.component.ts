import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICustomer } from 'src/app/Models/icustomer';
import { CustomerAdminServiceService } from 'src/app/Services/customer-admin-service.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  dataSource : ICustomer[] = [];

  
  constructor(public dialog: MatDialog,private cusService: CustomerAdminServiceService) { }

  ngOnInit(): void {
    this. getAllCustomers();
  }
  openDialog() {
    this.dialog.open(DialogCustomerComponent, {
      width:'30%'
    }).afterClosed().subscribe(val => {
      if(val=='Save'){
        this.getAllCustomers();
      }
    })
  }
  deleteCustomer(cusID:number){
    this.cusService.deleteCustomer(cusID).subscribe(product =>{
      alert("Customer Deleted");
      this.cusService.getAllCustomers().subscribe(customers =>{
        this.dataSource =customers
       
      })
    })

  }
  
  showDetails(row:any){
    this.dialog.open(CustomerDetailsComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val => {
      
        this.getAllCustomers();
    })
  }

  getAllCustomers(){
    this.cusService.getAllCustomers().subscribe(customers =>{
      this.dataSource = customers
      console.log(customers);
    
    })
  }
  editCustomer(row:any){
    this.dialog.open(DialogCustomerComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val=='Update'){
        this.getAllCustomers();
      }
    })
  }

}
