import { LightningElement,api } from 'lwc';
import PRODUCT_NAME_FIELD from '@salesforce/schema/Orders.ProductName';
    import RPRODUCT_CODE_FIELD from '@salesforce/schema/Orders.ListPrice';
    import UNIT_PRICE_FIELD from '@salesforce/schema/Orders.UnitPrice';
    import TOTAL_PRICE_FIELD from '@salesforce/schema/Orders.TotalPrice';
    import DRIEVR_FIELD from '@salesforce/schema/Orders.Driver';
    import PHONE_FIELD from '@salesforce/schema/Orders.Phone';

export default class DeliveryDetails extends LightningElement {
    
            @api recordId;
        @api objectApiName;
        fields = [PRODUCT_NAME_FIELD, LIST_PRICE_FIELD, UNIT_PRICE_FIELD,TOTAL_PRICE_FIELD,DRIVER_FIELD,PHONE_FIELD];
        handleSubmit(event){
         
            console.log('Product detail : ',event.detail.fields);
            console.log('Product name : ',event.detail.fields.Name);
            console.log('Product listprice : ',event.detail.fields.ListPrice);
            console.log('Product unitprice : ',event.detail.fields.UnitPrice);
            console.log('Product totalprice : ',event.detail.fields.TotalPrice);
            console.log('Product driver : ',event.detail.fields.Driver);
            console.log('Product phone :',event.details.fields.Phone);
        }
}
