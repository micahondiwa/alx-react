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

     <div className='Login-form'>
      <p>Email: </p>
      <form className='form'>email@example.com</form>
      <p>Password: </p>
      <form className='form'>*****</form>
      <button>OK</button>
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
