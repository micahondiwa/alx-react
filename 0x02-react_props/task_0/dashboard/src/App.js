import './App.css';
import Header from './Header/Header.js'
import Login from './Login/Login.js'
import Footer from './Footer/Footer.js'

function App(isIndex) {
  return (
    <>
    <section>
      <Header/>
    </section>
    <Login/>
    <section>

     </section>

     <hr className='Horizontal-rule'></hr>

    <section>  
      <Footer/>

    </section>
    </>

      );
}

export default App;
