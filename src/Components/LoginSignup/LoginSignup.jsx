import React, { useState } from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person3.png'

const LoginSignup = () => {

     const [action, setAction] = useState('');

      const registerLink = () =>  {
        setAction(' active');

      };

      const loginLink = () =>  {
        setAction('');

      };
  return (

      <div className={`container${action}`}>

          <div className="form-box login">
              <form action="">
                  <h1>LOGIN</h1>
                  <div className="underline"></div>
                  <div className="inputs">

                      <input type="text" placeholder='Username' required />
                      <img src={user_icon} alt="" />


                      <input type="password"
                          placeholder='Password' required />
                      <img src={password_icon} alt="" />

                  </div>

                  <div className="remember-forgot">
                      <label><input type="checkbox" />Remember Me</label>
                      <a href="#">Forgot Password?</a>
                  </div>
                  <button className='submit' type='submit'>Login</button>
                  <div className="register-link">
                      <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a> </p>
                  </div>

              </form>
          </div>
            <div className="form-box1 register">
              <form action="">
                  <h1 className='form2'>Register</h1>
                  <div className="underline1"></div>
                  <div className="inputs">

                      <input type="text" placeholder='Username' required />
                      <img src={user_icon} alt="" />


                      <input type="email" placeholder='Email' required />
                      <img src={email_icon} alt="" />




                      <input type="password"
                          placeholder='Password' required />
                      <img src={password_icon} alt="" />

                  </div>

                  <div className="remember-forgot">
                      <label><input className='text' type="checkbox" />Agree to terms and conditions</label>

                  </div>
                  <button className='submit1' type=      'submit'>Register</button>
                  <div className="register-link">
                      <p className='text'>Already have an account? <a href="#" onClick={loginLink}>Login</a> </p>
                  </div>


              </form>

          </div>

          </div>

        
                
           
  );
};

export default LoginSignup
