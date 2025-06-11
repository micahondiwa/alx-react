/**Footerjs */
import './App.css';
import logo from './src/logo.jpg';
import {getFullYear, getFooterCopy} from './src/utils.js'

function Footer(isIndex) {
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

export default Footer;
