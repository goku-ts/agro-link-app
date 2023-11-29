
export type dataType = {
    name: string,
    description: string
    image: string
    variety: string,
    origin: string
    harvest_date: string
    unit_price: string,
    quantity: number,
    type: string
    isAvailable: boolean,
    seller: string
    id: number

}[]
export const Data : dataType = [
    {
        "name": "TOMATO",
        "description": "vine-ripened goodness",
        "image": "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
        "variety": "Roma",
        "origin": "Western Region",
        "harvest_date": "15 Nov 2023",
        "unit_price": "60",
        "quantity": 25,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Alice Green",
        "id": 2
    },
    {
        "name": "CARROT",
        "description": "crisp and sweet",
        "image": "https://images.unsplash.com/photo-1633380110125-f6e685676160?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
        "variety": "Nantes",
        "origin": "Eastern Region",
        "harvest_date": "12 Nov 2023",
        "unit_price": "40",
        "quantity": 40,
        "type": "Organic",
        "isAvailable": true,
        "seller": "John Smith",
        "id": 3
    },
    {
        "name": "ONION",
        "description": "juicy and fresh",
        "image": "https://t4.ftcdn.net/jpg/04/32/30/55/360_F_432305577_JB4kKOPESHH2gZculYUZlj5U2vCbdjxn.jpg",
        "variety": "Gala",
        "origin": "Central Region",
        "harvest_date": "11 Nov 2023",
        "unit_price": "70",
        "quantity": 20,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Emily Johnson",
        "id": 4
    },
    {
        "name": "RICH ORGANIC SWEET",
        "description": "creamy texture",
        "image": "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg",
        "variety": "Yukon Gold",
        "origin": "Northern Region",
        "harvest_date": "14 Nov 2023",
        "unit_price": "2455",
        "quantity": 35,
        "type": "Organic",
        "isAvailable": false,
        "seller": "David Brown",
        "id": 5
    },
    {
        "name": "BROCCOLI",
        "description": "nutrient-packed florets",
        "image": "https://media.npr.org/assets/img/2011/10/11/chopped-broccoli_wide-2a176f7ffda2345362dd381e8204d4d3c7cc36f8-s1100-c50.jpg",
        "variety": "Calabrese",
        "origin": "Ashanti Region",
        "harvest_date": "13 Nov 2023",
        "unit_price": "45",
        "quantity": 28,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Sophie Miller",
        "id": 6
    },
    {
        "name": "LETTUCE",
        "description": "crisp and refreshing",
        "image": "https://i.pinimg.com/736x/2a/a7/f4/2aa7f4c0fbb6aee00564fd74e381e435.jpg",
        "variety": "Romaine",
        "origin": "Greater Accra Region",
        "harvest_date": "17 Nov 2023",
        "unit_price": "50",
        "quantity": 22,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Olivia Taylor",
        "id": 8
    },
    {
        "name": "ORANGE",
        "description": "citrusy delight",
        "image": "https://www.hauert.com/fileadmin/MediaValet/_processed_/1/1/csm_Orange_yi1YB_FubH8-unsplash_b6cc0b77ab.jpg",
        "variety": "Valencia",
        "origin": "Western Region",
        "harvest_date": "18 Nov 2023",
        "unit_price": "75",
        "quantity": 18,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Michael Davis",
        "id": 9
    },
    {
        "name": "CUCUMBER",
        "description": "cool and crunchy",
        "image": "https://northernnester.com/wp-content/uploads/2021/01/burpless-cucumber.jpg",
        "variety": "English",
        "origin": "Central Region",
        "harvest_date": "19 Nov 2023",
        "unit_price": "65",
        "quantity": 24,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Ella Clark",
        "id": 10
    },
    {
        "name": "GRAPE",
        "description": "sweet and juicy",
        "image": "https://canadianfoodfocus.org/wp-content/uploads/2020/09/table-grapes.jpg",
        "variety": "Red Seedless",
        "origin": "Ashanti Region",
        "harvest_date": "20 Nov 2023",
        "unit_price": "90",
        "quantity": 12,
        "type": "Organic",
        "isAvailable": true,
        "seller": "Matthew Turner",
        "id": 11
    },

]


export const serviceData = [
    {
        "id" : 1,
        "name": "Transport",
        "type": "Truck",
        "description": "good pricing",
        "working_hours": "6am - 8pm",
        "rate": "20",
        "isAvailable": true,
        "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
        "location" : "Accra",
    },
    
        {
          "id": 2,
          "name": "Transport",
          "type": "Van",
          "description": "affordable rates",
          "working_hours": "7am - 9pm",
          "rate": "15",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Kumasi"
        },
        {
          "id": 3,
          "name": "Transport",
          "type": "Car",
          "description": "fast and reliable",
          "working_hours": "8am - 6pm",
          "rate": "25",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Tamale"
        },
        {
          "id": 4,
          "name": "Warehouse",
          "type": "Long Term",
          "description": "perfect for small packages",
          "working_hours": "9am - 7pm",
          "rate": "10",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Cape Coast"
        },
        {
          "id": 5,
          "name": "Pest Control",
          "type": "-",
          "description": "ideal for group travel",
          "working_hours": "10am - 8pm",
          "rate": "30",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Takoradi"
        },
        {
          "id": 6,
          "name": "Transport",
          "type": "Aboboya",
          "description": "environmentally friendly option",
          "working_hours": "8am - 5pm",
          "rate": "5",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Sunyani"
        },
        {
          "id": 7,
          "name": "Transport",
          "type": "Delivery Truck",
          "description": "specialized for goods delivery",
          "working_hours": "7am - 6pm",
          "rate": "25",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Ho"
        },
        {
          "id": 8,
          "name": "Fertilizer",
          "type": "NPK",
          "description": "quick and nimble",
          "working_hours": "10am - 7pm",
          "rate": "12",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Koforidua"
        },
        {
          "id": 9,
          "name": "Tools and Equipment",
          "type": "Sales and Hirre",
          "description": "suitable for cargo",
          "working_hours": "6am - 8pm",
          "rate": "18",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Techiman"
        },
        {
          "id": 10,
          "name": "Adanse Services",
          "type": "Seed and seelings",
          "description": "eco-friendly option",
          "working_hours": "9am - 5pm",
          "rate": "22",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Wa"
        },
        {
          "id": 11,
          "name": "Transport",
          "type": "Limousine",
          "description": "luxurious travel experience",
          "working_hours": "24/7",
          "rate": "50",
          "isAvailable": true,
          "image": "https://www.profi.co.uk/wp-content/uploads/sites/8/2022/01/8a._jd_7r330_ap.jpg?w=900",
          "location": "Bolgatanga"
        }
      
      
]