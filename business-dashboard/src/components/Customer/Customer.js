import "./Customer.css"
import { getCustomerById } from "../../data/customers"
import { useParams } from "react-router-dom"

export default function Customer(){
    
    const params = useParams();
    const customer = getCustomerById(params.customerId)
    
    return(<>
        <div className="hero">
        <img className="hero-img" src="https://unsplash.it//800/200" alt="background"></img>
        <img className="profile-pic" src={customer.img} alt="profile pic"></img>
    </div>

    <div className="content">
        <div className="user-info">
            <div className="name">{customer.name}</div>
            <div className="number">{customer.phone}</div>
            <div className="email">{customer.email}</div>
            <div className="address">Customer Since {customer.anniversary_date.getFullYear()}</div>
        </div>

        <div className="map">Address: <br/> {customer.street} <br/> {customer.city}, {customer.state} {customer.zip}
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="map" width="100%" height="500" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=312%20main%20street,%20imperial,%20pa%2015126&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a><br/>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button class="call">Call</button>
            <button class="email">E-mail</button>
        </div>
    </div>
    </>)
}