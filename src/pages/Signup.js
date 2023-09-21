import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../css/main.css"
import "../css/util.css"

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log('Signing up:', email, password, confirmPassword);
    navigate("/login");
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">Sign Up</span>
            <div className="d-flex justify-content-center mb-3" style={{
                            justifyContent:"center",
                            alignItems:"center",
                            display:"flex",
                        }}>
                            <img src={require('../images/logo.png')} alt="Logo" />
            </div>
            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
              <input
                className="input100"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input100"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Confirm password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input100"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="focus-input100" data-placeholder="Confirm Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" ></div>
                <button className="login100-form-btn btn-login" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
