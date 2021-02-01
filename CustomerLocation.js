import { LightningElement,wire ,api} from 'lwc';
import FIELD_Location from '@salesforce/schema/Customer.Location__c';
import FIELD_Latitude from '@salesforce/schema/Customerc.Location__Latitude__s';
import FIELD_Longitude from '@salesforce/schema/Photo__c.Location__Longitude__s';
export default class CustomerDetails extends LightningElement {
    
        @api recordId;
        genericInputChange(event){
            console.log('Customer Details => ' , event.target.customerdetails);
            
        }
         lstMarkers = [];
    zoomlevel = "1";

    handleClick(){

                // Get the Latitude and Longitude from Geolocation API
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
        
                 @wire(getRecord, { recordId: 'a032y00000116m3AAA', fields: customerFields })
               const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
                const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
                this.lstMarkers = [{
                   Location: {Latitude,Longitude},
                  
                    title : 'You are here'
                }];
                this.zoomlevel = "4";
            });
        }
    }

           
}
