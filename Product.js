import { LightningElement,api } from 'lwc';
import PRODUCT_NAME_FIELD from '@salesforce/schema/Orders.ProductName';
    import RPRODUCT_CODE_FIELD from '@salesforce/schema/Orders.ProductCode';
    import UNIT_PRICE_FIELD from '@salesforce/schema/Orders.UnitPrice';
    import TOTAL_PRICE_FIELD from '@salesforce/schema/Orders.TotalPrice';
 import DRIEVR_FIELD from '@salesforce/schema/Orders.Driver';

export default class DeliveryDetails extends LightningElement {
    
            @api recordId;
        @api objectApiName;
        fields = [PRODUCT_NAME_FIELD, RPRODUCT_CODE_FIELD, UNIT_PRICE_FIELD,TOTAL_PRICE_FIELD,DRIVER_FIELD];
        handleSubmit(event){
         
            console.log('Product detail : ',event.detail.fields);
            console.log('Product name : ',event.detail.fields.Name);
            console.log('Product code : ',event.detail.fields.Code);
            console.log('Product unitprice : ',event.detail.fields.UnitPrice);
            console.log('Product totalprice : ',event.detail.fields.TotalPrice);
             console.log('Product driver : ',event.detail.fields.Driver);
        }
}
