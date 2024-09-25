import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword ] = useState('');


    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            toast.error("Email is required", { className: 'toast-custom' });
            return false;
        }
        if (!password) {
            toast.error("Name is required", { className: 'toast-custom' });
            return false;
        }
        
        return true;
    };

    const loginUser = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
                 
        let result = await fetch("https://www.api.jigsawplanet.online/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
            "Content-Type": "application/json"
            }
            
        });
        
        const data = await result.json();
                
        if (result.ok) {
            localStorage.setItem('key', JSON.stringify(data.user));
            navigate("/");
            toast.success("User Login Successfully..!!", { className: 'toast-custom' });
        } else {
            toast.error("User Email or Password do not match..!!", { className: 'toast-custom' });
            }
        }

    return (
        <div className="mb-5">
        <h2 className='text-primary text-center text-bolder my-4'>Login Form</h2>
        <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5 bgLeftSide">
                        <div className="mb-5">
                          <h3 className="h4 font-weight-bold text-theme">Login</h3>
                        </div>
                        <h6 className="h5 mb-0">Log-In to your account.</h6>
                        <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Login.</p>
                        <form encType="multipart/form-data" onSubmit={loginUser}>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="User Email"
                            />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="User Password"
                            />
                          </div> 
                          <div>
                          <button type="submit" className="col-lg-6 btn btn-dark">Login</button>
                          <br></br>
                          <Link to="/forget" className="btn text-body">Forgot password?</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay customBackground rounded-right" />
                        <div className="account-testimonial">
                          <img src='./images/Puzzlle.jpeg' className="middle-img" width={200} height={200} alt="Register" />
                          <h4 className="text-white my-4">Just One Step left to Play Awesome Game</h4>
                          <p>- Login User :) </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* Row */}
        </div>
      </div>
    );
};

export default Login;
