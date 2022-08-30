import './Navbar.css'
import '../../index.css'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar(props){
    return(
        <>
        <div className="top-bar">
        <span id="back-arrow" className="material-icons">arrow_back</span>
        <span className="heading">Appointments</span>
        <div class="icons">
            <div className="day"><span class="material-icons" style={{"font-size":"25px"}} >today</span>Wednesday, 24 August</div>
            <div className="time"><span class="material-icons" style={{"font-size":"25px"}} >schedule</span> 09:32 AM</div>
            <div className= "number">2</div>
            <span className="notifications material-icons">notifications</span>
            <span id="more" className="material-icons">more_vert</span>
        </div>
    </div>

    <div className="card-container">
        {props.children}
    </div>

    <div className="bottom-bar">
        <img className='bar-logo' src={require('./logo.png')} alt="logo"/>
        <NavLink to="home" style={({ isActive }) => ({color: isActive ? 'rgb(107, 107, 243)' : null,})}
          className="text material-icons">Home
                <i className="material-icons">home</i>
        </NavLink>
        <NavLink to="appointments" style={({ isActive }) => ({color: isActive ? 'rgb(107, 107, 243)' : null,})}
            className="text">Appointments
                <i className="material-icons">event</i>
        </NavLink>
        <NavLink to="scheduling" style={({ isActive }) => ({color: isActive ? 'rgb(107, 107, 243)': null,})}
            className="text">Schedule
                <i className="messages material-icons ">schedule</i> 
        </NavLink>
        <NavLink to="customers" style={({ isActive }) => ({color: isActive ? 'rgb(107, 107, 243)': null,})}
            className="text customers">Customers
                <i className="customers material-icons ">person</i>
        </NavLink>
        <NavLink to="settings" style={({ isActive }) => ({color: isActive ? 'rgb(107, 107, 243)': null,})}
         className="text">Settings
                <i className="customers material-icons">settings</i>
        </NavLink>        
            
            <div className="logout">Logout
            <i className="customers material-icons" >arrow_back_ios</i></div>
    </div>
        </>
    )
}