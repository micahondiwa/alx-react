import react from 'react';
import './Notifications.css';

export function Notifications() {
    return (
        <div className='Notifications' 
        style={{display: 'flex', marginLeft:"10px"}}>
            <p>Here is the list of notifications</p>
            <button 
            aria-label='Close' 
            onClick={console.log("Close button has been clicked")}>
                </button>
        </div>
    )
}

export default Notifications;