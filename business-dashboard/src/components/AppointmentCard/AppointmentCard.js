import "./AppointmentCard.css"

export default function AppointmentCard(){
    return(
        <div className="card-body">

        <img src={require("./profile_med.png")} className="profile-pic" alt=""/>
        <div className="card-name">
            <div className="name">Gino Murin</div>
            <div href='#' className="overflow">X</div>
            <div className="service-type">Estimate</div>
        </div>
        <div className="card-time">
            <div className="cir"></div>
            <div className="contact">
                <div className="phone">+1-311-861-6564</div>
                <div className="call">Contact</div>
            </div>
            <div className="date">2 Feb 2021</div>
            <div className="time">09:00 AM</div>
        </div>
    </div>
    )
}