import { getCustomerById } from "../../data/customers"
import { useParams } from "react-router-dom"

export default function Customer(){
    
    const params = useParams();
    const customer = getCustomerById(params.customerId)
    
    return(<>
        <h1>hi {customer.name}</h1>
    </>)
}