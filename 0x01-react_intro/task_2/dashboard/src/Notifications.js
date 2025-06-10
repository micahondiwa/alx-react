import './Notifications.css';

export function Notifications() {
    const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
            style={{marginLeft:"5px"}}
            aria-label='Close' 
            onClick={console.log("Close button has been clicked")}>
                <img src='./close-icon.png' alt=''/>
                X
            </button>
            <ul>
                <li data-priority="default">New course available</li> 
                <li data-priority="urgent">New resume available</li> 
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notifications;