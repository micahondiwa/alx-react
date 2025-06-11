import './App.css';
import Header from './Header/Header.js'
import Login from './Login/Login.js'
import Footer from './Footer/Footer.js'

function App() {
  return (
    <>
    <section> <Header/></section>
    <hr className='Horizontal-rule'></hr>
    <section><Login/> </section>
    <hr className='Horizontal-rule'></hr>
    <section> <Footer/> </section>
    </>
      );
}
export default App;
