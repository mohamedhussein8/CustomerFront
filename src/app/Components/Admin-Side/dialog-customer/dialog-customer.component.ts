import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerAdminServiceService } from 'src/app/Services/customer-admin-service.service';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {
  customerForm !:FormGroup ;
  actionBtn:string="Save";


  constructor(private formBuilder:FormBuilder,private dialogRef: MatDialogRef<DialogCustomerComponent>,@Inject(MAT_DIALOG_DATA) public editeData:any,
  private cusService: CustomerAdminServiceService) {}

  ngOnInit(): void {
    this.customerForm= this.formBuilder.group({
      customerFirstName:['',Validators.required],
      customerLastName:['',Validators.required],
      customerGender:['',Validators.required],
      customerDOB:['',Validators.required],
      customerEmail:['',Validators.required],
      addresses: this.formBuilder.array([this.formBuilder.control('')]),
  })
  if(this.editeData){
    console.log(this.editeData);
    this.actionBtn="Update";
    this.customerForm.get('customerFirstName')?.setValue(this.editeData.customerFirstName);
    this.customerForm.controls['customerLastName'].setValue(this.editeData.customerLastName);
    this.customerForm.controls['customerGender'].setValue(this.editeData.customerGender);
    this.customerForm.controls['customerDOB'].setValue(this.editeData.customerDOB);
    this.customerForm.controls['customerEmail'].setValue(this.editeData.customerEmail);
    this.customerForm.controls['addresses'].setValue(this.editeData.addresses);
  
  }
}
get customerAddresses() {
  return this.customerForm.get('addresses') as FormArray;
}
addAdressNo(event: any) {
  this.customerAddresses.push(this.formBuilder.control(''));
  event.target?.classList.add('d-none');
}
SaveChange(){
  this.addPCustomer();
  }
  
addPCustomer(){

  if(!this.editeData){
    if(this.customerForm.value){
      this.cusService.addCustomer(this.customerForm.value).subscribe({
        next:(res)=>{
          alert("Customer added successfully");
          this.customerForm.reset();
          this.dialogRef.close('Save');
         
        },
        error:(err)=>{
          alert("Added Customer Failed ");
          console.log(err);
        }
      })
    }
  }
  else {
    this.updateCustomer(this.editeData.id);
  }
}
updateCustomer(id:number){
  this.cusService.updateCustomer(id,this.customerForm.value).subscribe({
    next:(res)=>{
      alert("Customer Updated Successfully");
      this.customerForm.reset();
      this.dialogRef.close('Update');
    },
    error:()=>{
       alert("Error while updating ")
    }
  })
}

}
