import './App.css';
import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js'
import Header from './Header/Header.js'

function App(isIndex) {
  const year = getFullYear();
  const alx = getFooterCopy(isIndex)
  return (
    <>
    <section>
      <Header/>
    </section>

    <hr className='Horizontal-rule'></hr>

    <section>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
     </div>
     <div className='Login-form'>
        <form id="signup-form">

        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="email@example.com" />


        <label htmlFor="password"
        style={{marginLeft:"20px"}}
        >Password: </label>
        <input name="password" id="password" placeholder="*******" />


        <button>OK</button>
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
