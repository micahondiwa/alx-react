/**Header js */
import './Header.css';
import logo from './images/logo.jpg';

export default function Header() {
  return (
      <div className="App-header">
      <img src={logo} alt="ALX Logo"/>
      <h1>School dashboard</h1>
    </div>
    )
};