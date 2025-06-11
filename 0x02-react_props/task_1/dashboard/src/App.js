import './App.css';
import Notifications from './Notifications.js';
import Login from './Login/Login.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';

function App() {
  return (
    <>
      <Notifications />
      <header>
        <Header />
      </header>
      <hr className="Horizontal-rule" />
      <body>
        <Login />
      </body>
      <hr className="Horizontal-rule" />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
