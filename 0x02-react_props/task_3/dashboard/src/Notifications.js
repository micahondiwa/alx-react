import './Notifications.css';

export function Notifications() {
    const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
            style={{
            marginLeft:"5px", 
            position: 'absolute',
            right: "8px",
            top: "8px",
            border: "none",
            backdroung: 'transparent',
            cursor: 'pointer',
            fontSize: '16px'

            }}
            aria-label='Close' 
            onClick={console.log("Close button has been clicked")}>
                <img src='./close-icon.png' alt=''/>
                X
            </button>
            <ul>
                <li style={{color: 'blue'}} data-priority="default">New course available</li> 
                <li style={{color: 'red'}} data-priority="urgent">New resume available</li> 
                <li style={{color: 'red'}} dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notifications;