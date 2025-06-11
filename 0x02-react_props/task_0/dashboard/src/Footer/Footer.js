/**Footerjs */
import './Footer.css';
import {getFullYear, getFooterCopy} from './src/utils.js'

export default function Footer(isIndex) {
  const year = getFullYear();
  const alx = getFooterCopy(isIndex)
  return (
    <>
    <section>  
    <div className="App-footer">
        <p>Copyright {year} - {alx}</p>
      </div> 
    </section>
    </>

      );
}
