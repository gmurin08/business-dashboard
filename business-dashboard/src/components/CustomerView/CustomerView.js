import './CustomerView.css'
import {useNavigate} from 'react-router-dom'
import { getCustomers } from '../../data/customers'

export default function CustomerView(){
    const customers = getCustomers();
    const navigate = useNavigate();
    return(<>
        {customers && customers.map((customer, key)=>{
            return(
            <div className="details-container">
                <img className='cv-profile-pic' src="https://unsplash.it//200/200" alt="" />
                <div className='details-bar'>
                    <div>{customer.name}</div>
                    <div>Customer Since {customer.anniversary_date.getFullYear()}</div>
                    <button onClick={()=>{navigate("/customers/" + customer.id)}}>More Details</button>
                </div>
            </div>
        )})}
    </>)
}