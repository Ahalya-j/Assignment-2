import { LightningElement } from 'lwc';

export default class DeliveryManagement extends LightningElement {
    
        
        genericInputChange(event){
            console.log('Customer Details => ' , event.target.customerdetails);
            
        }
         lstMarkers = [];
    zoomlevel = "1";

    handleClick(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

                // Get the Latitude and Longitude from Geolocation API
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                
                // Add Latitude and Longitude to the markers list.
                this.lstMarkers = [{
                    location : {
                        Latitude: latitude,
                        Longitude : longitude
                    },
                    title : 'You are here'
                }];
                this.zoomlevel = "4";
            });
        }
    }

           
}
