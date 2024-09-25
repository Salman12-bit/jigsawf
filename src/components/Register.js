import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!name) {
      toast.error("Name is required", { className: 'toast-custom' });
      return false;
    }
    if (!email) {
      toast.error("Email is required", { className: 'toast-custom' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format", { className: 'toast-custom' });
      return false;
    }
    if (!address) {
      toast.error("Address is required", { className: 'toast-custom' });
      return false;
    }
    if (!password) {
      toast.error("Password is required", { className: 'toast-custom' });
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", { className: 'toast-custom' });
      return false;
    }
    return true;
  };


  const registerUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let result = await fetch("https://www.api.jigsawplanet.online/register", {
      method: "post",
      body: JSON.stringify({ name, email, address, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const regdata = await result.json();

    if (regdata) {
      toast.success("User Registered Successfully..!!", { className: 'toast-custom' });
      navigate("/");
    }
  };

  return (
    <div>
      <h2 className='text-primary text-center text-bolder my-4'>Sign Up Form</h2>
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5 bgLeftSide">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">Register</h3>
                      </div>
                      <h6 className="h5 mb-0">Just Do Register.</h6>
                      <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.</p>
                      <form encType="multipart/form-data" onSubmit={registerUser}>
                        <div className="form-group">
                          <label htmlFor="yourName">Your name</label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="yourName"
                            placeholder="User Name "
                          />
                        </div>
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
                          <label htmlFor="userPhoto">Your Address:</label>
                          <input
                            type="address"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="userAddress"
                            placeholder="User Address"
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="User Passsword"
                          />
                         

                        </div>

                        <button type="submit" className="col-lg-6 btn btn-dark">Register</button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay customBackground rounded-right" />
                      <div className="account-testimonial">
                        <img src='./images/Puzzlle.jpeg' className="middle-img" width={350} height={250} alt="Register" />
                        <h4 className="text-white my-4">This Awesome Game is yours!</h4>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
            <p className="text-muted text-center my-4">Already have an account?
              <Link to="/login" className="text-danger ml-1">Login</Link>
            </p>
            {/* end row */}
          </div>
          {/* end col */}
        </div>
        {/* Row */}
      </div>
    </div>
  );
};

export default Register;