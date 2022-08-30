import './CustomerView.css'
import {useNavigate} from 'react-router-dom'
import { getCustomers } from '../../data/customers'

export default function CustomerView(){
    const customers = getCustomers();
    const navigate = useNavigate();
    return(<>
        {customers && customers.map((customer, key)=>{
            return(
            <div>
                <h1>{customer.name}</h1>
                <h4>Customer Since {customer.anniversary_date.getFullYear()}</h4>
                <button onClick={()=>{navigate("/customers/" + customer.id)}}>More Details</button>
            </div>
        )})}
    </>)
}