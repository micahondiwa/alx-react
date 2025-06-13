/**Notificationitem */
import PropTypes from prop-PropTypes;

export default function Notificationitem({type, html, value}) {
    return(
        <>
        <li
        data-notification-type={type} {...Notificationitem(html ? {dangerouslySetInnerHTML: html}: {})}/> {!html && value}
        </>
    )};

Notificationitem.PropTypes={
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.Shape({
        __html: PropTypes.string, 
    }),
};

Notificationitem.defaultProps = {
    type: 'default',
    value: '', 
    html: null
};

