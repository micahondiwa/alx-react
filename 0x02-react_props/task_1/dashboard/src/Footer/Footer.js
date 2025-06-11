/**Footerjs */
import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils.js'

export default function Footer(isIndex) {
  const year = getFullYear();
  const alx = getFooterCopy(isIndex)
  return (
    <div className="App-footer">
        <p>Copyright {year} - {alx}</p>
      </div> 
      );
}
