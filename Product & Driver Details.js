import { LightningElement } from 'lwc';

export default class ProductDetails extends LightningElement {
    items = [
        
        {
            label: 'Product - SLA: Gold',
            name: '1',
            expanded: true,
            items: [
                {
                    label: 'Location - Kerala',
                    name: '2',
                    expanded: true,
                    items: [
                        {
                            label: 'Driver - Mr.Roney , Blues Courier Service',
                            name: '3',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Mob : 9806754923',
                            name: '4',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
                {
                    label: 'Location - Tamilnadu',
                    name: '5',
                    expanded: false,
                    items: [
                        {
                            label: 'Driver - Mr.Haroon , MultiMedia Courier Service',
                            name: '6',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Mob : 9075483527',
                            name: '7',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
                
            ],
        },

        {
            label: 'Product - SLA: Bronze',
            name: '8',
            expanded: false,
            items: [
                {
                    label: 'Location - Bangalore',
                    name: '9',
                    expanded: true,
                    items: [
                        {
                            label: 'Driver - Mr.Joe , Black Courier Service',
                            name: '10',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Mob : 9023813945',
                            name: '11',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
                {
                    label: 'Location - Kerala',
                    name: '12',
                    expanded: false,
                    items: [
                        {
                            label: 'Driver - Mr.Huge , Oranges Courier Service',
                            name: '13',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Mob : 8389028395',
                            name: '14',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
    ];

}
