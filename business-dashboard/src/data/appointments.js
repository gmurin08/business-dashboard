let appointments = [
    {
        date: new Date('September 15, 2022, 13:00:00'),
        customer: "Jane Doe",
        associates: ["Brian Jones", "Kevin Smith"],
        service_type: "Estimate"
    },
    {
        date: new Date('September 9, 2022, 16:00:00'),
        customer: "John Smith",
        associates: ["Brian Jones", "Mike Stevens"],
        service_type: "Estimate"
    },
    {
        date: new Date('October 9, 2022, 09:00:00'),
        customer: "John Smith",
        associates: ["Kevin Smith"],
        service_type: "Estimate"
    }
]

export function getAppointments(){
    return appointments;
}