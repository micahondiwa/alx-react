import './App.css';
import {getFullYear, getFooterCopy} from './utils.js'
import Header from './Header/Header.js'
import Login from './Login/Login.js'

function App(isIndex) {
  const year = getFullYear();
  const alx = getFooterCopy(isIndex)
  return (
    <>
    <section>
      <Header/>
    </section>
    <Login/>
    <section>

     </section>

     <hr className='Horizontal-rule'></hr>

    <section>  
    <div className="App-footer">
        <p>Copyright {year} - {alx}</p>
      </div> 
    </section>
    </>

      );
}

export default App;
