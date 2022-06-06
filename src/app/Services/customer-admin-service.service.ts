import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICustomer } from '../Models/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerAdminServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {

    return this.httpClient.get<ICustomer[]>(`${environment.APIURL}/Customer`)

  }
  getCustomerByID(customerID: number): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(`${environment.APIURL}/Customer/${customerID}`)

  }

  addCustomer(newCustomer:any) {
    return this.httpClient.post<any> (`${environment.APIURL}/Customer`,newCustomer)
 }
  updateCustomer(customerID: number, UpdatedCustomer: any) {
    return this.httpClient.put<any>(`${environment.APIURL}/Customer/${customerID}`,UpdatedCustomer)

  }

  deleteCustomer(customerID: number):Observable<ICustomer> {
    return this.httpClient.delete<ICustomer>(`${environment.APIURL}/Customer/${customerID}`)

  }
}
