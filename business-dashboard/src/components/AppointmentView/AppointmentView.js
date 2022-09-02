import './AppointmentView.css'
import { getAppointments } from '../../data/appointments'
import {getCustomers} from '../../data/customers'

export default function AppointmentView(){

    const appointments = getAppointments();
    const customers = getCustomers();

    return(<>
    
        <div>Upcoming Appointments</div>
        <div className="appointment-card">
            <div>{appointments[1].date.getFullYear()}</div>
        </div>
    
    </>)
}