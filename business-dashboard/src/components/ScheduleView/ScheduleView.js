import './ScheduleView.css'

export default function ScheduleView(){
    return( <>
        <div className="schedule-heading">Your Current Schedule:</div>
        <div>Monday: 9-5 <br/> Tuesday: 9-5 <br/> 
        Wednesday: 9-5 <br/> Thursday: 9-5 <br/>
        Friday: 9-5 <br/> Saturday: - <br/>
        Sunday: - <br/>
        </div>

        <div className='changes'>Make Changes:</div>
        <form className="schedule-form">
            <fieldset>
                <legend>Monday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Tuesday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Wednesday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Thursday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Friday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Saturday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <fieldset>
                <legend>Sunday:</legend>
                <input type="time" />
                <div>to</div>
                <input type="time"/>
            </fieldset>
            <input type="submit" className='btn-update' value='Update' />
        </form>
    
    </>)
}