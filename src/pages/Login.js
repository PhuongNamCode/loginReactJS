import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../css/main.css"
import "../css/util.css"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
        if (email.trim() === 'admin' && password === 'admin') {
            navigate("/")
        } else {
            alert('Password is incorrect.');
        }
    };

    const handleSignup = () => {
        navigate("/signup")
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-26">Welcome</span>

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
                                name="pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input100" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>

                                <button className="login100-form-btn btn-login" onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </div>

                        <div className="text-center p-t-115">
                            <span className="txt1">Don’t have an account ? </span>

                            <a className="txt2" onClick={handleSignup} href="#">
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}