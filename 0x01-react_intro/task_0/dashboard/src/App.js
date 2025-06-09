import logo from './logo.jpg';

function App() {
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
     </section>

     <hr className='Horizontal-rule'></hr>

    <section>  
    <div className="App-footer">
        <p>Copyright 2020 - ALX</p>
      </div> 
    </section>
    </>

      );
}

export default App;
