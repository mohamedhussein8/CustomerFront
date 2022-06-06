import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomer } from 'src/app/Models/icustomer';
import { CustomerAdminServiceService } from 'src/app/Services/customer-admin-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  // Customer? : ICustomer  
  Customer= {} as ICustomer  ;
  constructor(private cusService: CustomerAdminServiceService,private dialogRef: MatDialogRef<CustomerDetailsComponent>,@Inject(MAT_DIALOG_DATA) public editeData:any) {}

  ngOnInit(): void {
    this.cusService.getCustomerByID(this.editeData.id).subscribe({
      next:(res)=>{
       this.Customer=res;
      },
      error:()=>{
         alert("Error while View ")
      }
    })
  }
  }


