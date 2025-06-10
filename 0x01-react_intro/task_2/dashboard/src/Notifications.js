import react from 'react';
import './Notifications.css';

export function Notifications() {
    return (
        <div className='Notifications' style={{position:'relative', padding: '1rem'}}>
            <p>Here is the list of notifications</p>
            <button>
                Close
                </button>
        </div>
    )
}

export default Notifications;