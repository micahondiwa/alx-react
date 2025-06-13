/**Notifications js */
import './Notifications.css';
import NotificationItem from './NotificationItem';

export function Notifications() {
  const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button
        style={{
          marginLeft: '5px',
          position: 'absolute',
          right: '8px',
          top: '8px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src='./close-icon.png' alt='' />
        X
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
