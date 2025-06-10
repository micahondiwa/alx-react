import './Notifications.css';

export function Notifications() {
    return (
        <div className='Notifications' style={{display: 'flex'}}>
            <p>Here is the list of notifications</p>
            <button 
            style={{marginLeft:"5px"}}
            aria-label='Close' 
            onClick={console.log("Close button has been clicked")}>
            </button>
        </div>
    )
}

export default Notifications;