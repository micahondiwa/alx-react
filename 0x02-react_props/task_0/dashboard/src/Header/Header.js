/**Header js */
import './Header.css';
import logo from './logo.jpg';

export default function Header() {
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