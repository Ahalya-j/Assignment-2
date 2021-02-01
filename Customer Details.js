import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Customer.Name';
import BILLING_ADDRESS_FIELD from '@salesforce/schema/Customer.BillingAddress';
import EMAIL_FIELD from '@salesforce/schema/Customer.Email';
import SHIPPING_ADDRESS_FIELD from '@salesforce/schema/Customer.ShippingAddress';
import PHONE_FIELD from'@salesforce/schema/Customer.Phone';
export default class CustomerDetails extends LightningElement {

    @api recordId;
    @api objectApiName;

fields = [NAME_FIELD, BILLING_ADDRESS_FIELD, EMAIL_FIELD,SHIPPING_ADDRESS_FIELD,PHONE_FIELD];
     handleSubmit(event){
        console.log('Customer name : ',event.detail.fields.Name);
         console.log('Customer billing address : ',event.detail.fields.BillingAddress);
         console.log('Customer email address : ',event.detail.fields.Email);
        console.log('Customer shipping address : ',event.detail.fields.ShippingAddress);
        console.log('Customer Phone : ',event.detail.fields.Phone);
        
    }
   
      
}
