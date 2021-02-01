import { LightningElement,wire ,api} from 'lwc';

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
                
                // Add Latitude and Longitude to the markers list.
                this.lstMarkers = [{
                    @wire(getRecord {
                       recordId=a032y00000116m3AAA'
                       fields: [ 'Customer.Location__Latitude__s', 'Customer.Location__Longitude__s' ]
                    })
                    title : 'You are here'
                }];
                this.zoomlevel = "4";
            });
        }
    }

           
}
