/**Loginjs */
import './Login.css';

function Login(isIndex) {
  return (
    <>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
     </div>
     <div className='Login-form'>
        <form id="signup-form">

        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="email@example.com" />


        <label htmlFor="password"
        style={{marginLeft:"20px"}}
        >Password: </label>
        <input name="password" id="password" placeholder="*******" />


        <button>OK</button>
      </form>

     </div>

    </>

      );
}

export default Login;
