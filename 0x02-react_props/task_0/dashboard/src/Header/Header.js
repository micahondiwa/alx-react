/**Header js */
import './App.css';
import logo from './src/logo.jpg';

function Header() {
  return (
    <>
    <section>
      <div className="App-header">
      <img src={logo} alt="ALX Logo"/>
      <h1>School dashboard</h1>
    </div>
    </section>

    <hr className='Horizontal-rule'></hr>
    </> 
    )
};
