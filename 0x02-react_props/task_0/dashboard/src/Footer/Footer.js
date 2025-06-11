/**Footerjs */
import './App.css';
import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js'

function App(isIndex) {
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

export default App;
