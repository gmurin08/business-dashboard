let customers=[
    {
        id:'001',
        name: 'Gino Murin',
        street: "416 Ninth Ave",
        city: "Imperial", 
        state: "PA",
        zip: "15126",
        phone: "4122225134",
        email: "gmurin@email.com",
        anniversary_date: new Date('December 11, 2016, 12:00:00')
    },
    {
        id:'002',
        name: 'John Smith',
        street: "124 Main Street",
        city: "Oakdale", 
        state: "PA",
        zip: "15071",
        phone: "4122235134",
        email: "jsmith@email.com",
        anniversary_date: new Date('May 15, 2009, 12:00:00')
    },
    {
        id:'003',
        name: 'Jane Doe',
        street: "410 North Ave",
        city: "Pittsburgh", 
        state: "PA",
        zip: "15209",
        phone: "4122125134",
        email: "janed@email.com",
        anniversary_date: new Date('July 1, 2012, 12:00:00')
    }
]

export function getCustomers(){
    return customers;
}

export function getCustomerById(id){
    return customers.find(customer=> customer.id === id);
}