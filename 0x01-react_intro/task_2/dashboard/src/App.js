import './App.css';
import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js'

function App(isIndex) {
  const year = getFullYear();
  const alx = getFooterCopy(isIndex)
  return (
    <>
    <section>
      <div className="App-header">
      <img src={logo} alt="ALX Logo"/>
      <h1>School dashboard</h1>
    </div>
    </section>

    <hr className='Horizontal-rule'></hr>

    <section>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
     </div>

  <div className="Login-form">
  <form className="form">
    <label htmlFor="email">Email:</label>
    <input id="email" type="email" name="email" placeholder="email@example.com" />
    <label htmlFor="password">Password:</label>
    <input id="password" type="password" name="password" placeholder="*****" />
    <button type="submit">OK</button>
  </form>
  </div>


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
