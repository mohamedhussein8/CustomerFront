import { IAddresses } from "./iaddresses";

export interface ICustomer {
    id: number,
  customerFirstName: string,
  customerLastName: string,
  customerGender: string,
  customerDOB: Date,
  customerEmail: string,
  addresses:string[]
}
