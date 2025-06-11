import './App.css';
import Notifications from './Notifications.js';
import Login from './Login/Login.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';

function App() {
  return (
    <>
    <Notifications/>
    <Header/>
    <hr className='Horizontal-rule'></hr>
    <Login/>
    <hr className='Horizontal-rule'></hr>
    <Footer/>
    </>
      );
}
export default App;
