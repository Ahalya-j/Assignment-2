import { LightningElement ,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Customer.Name';
import BILLING_ADDRESS_FIELD from '@salesforce/schema/Customer.BillingAddress__c';
import EMAIL_FIELD from '@salesforce/schema/Customer.Email__c';
import SHIPPING_ADDRESS_FIELD from '@salesforce/schema/Customer.ShippingAddress__c';
export default class CustomerDetails extends LightningElement {

    @api recordId;
    @api objectApiName;

    genericInputChange(event){
        console.log('Street => ' , event.target.street);
        console.log('City => ' , event.target.city);
        console.log('Province => ' , event.target.province);
        console.log('Country => ' , event.target.country);
        console.log('postal Code => ' , event.target.postalCode);
    }
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
}

fields = [NAME_FIELD, BILLING_ADDRESS_FIELD, EMAIL_FIELD,SHIPPING_ADDRESS_FIELD,PHONE_FIELD];
     handleSubmit(event){
        console.log('Customer name : ',event.detail.fields.Name);
         console.log('Customer billing address : ',event.detail.fields.BillingAddress);
         console.log('Customer email address : ',event.detail.fields.Email);
        console.log('Customer shipping address : ',event.detail.fields.ShippingAddress);
        console.log('Customer Phone : ',event.detail.fields.Phone);
        
    }
   
      
}
