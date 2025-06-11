import './App.css';
import Header from './Header/Header.js'
import Login from './Login/Login.js'
import Footer from './Footer/Footer.js'

function App(isIndex) {
  return (
    <>
    <section> <Header/></section>
    <section><Login/> </section>
    <section> <Footer/> </section>
    </>
      );
}

export default App;
