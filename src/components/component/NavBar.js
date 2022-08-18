import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react"; 
import { connectWallet } from "../../wallet";

const NavBar = () => {
  useEffect(()=>{
     connectWallet() 
  })
  return (
    <header id="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <div className="logo-section flex-grow-1 d-flex align-items-center">
              <a className="site-logo site-title" href="/"><img src="images/logo.png" alt="site-logo" /></a>
            </div>
            <button className="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            <nav className="navbar navbar-expand-lg p-0">
              <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main-menu ml-auto"> 
                  <li className="menu_has_children"><a href="#0">Games</a>
                    <ul className="sub-menu">
                      <li><a href="/jackpot">Jackpot</a></li>
                      <li><a href="/p2e">Cash</a></li>
                    </ul>
                  </li>
                  <li className="menu_has_children"><a href="#0">Tournaments</a>
                    <ul className="sub-menu">
                      <li><a href="tournaments.html">Tournaments</a></li>
                      <li><a href="tournaments-details.html">Tournaments Details</a></li>
                    </ul>
                  </li>
                  <li className="menu_has_children"><a href="#0">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="winners.html">Winners</a></li>
                      <li><a href="faq.html">Faq</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="   right-area header-action d-flex align-items-center">
                  {/* <div className="lang d-flex align-items-center">
                    <img src="images/lang.png" alt="icon" />
                    <select>
                      <option value={1}>EN</option>
                      <option value={2}>BN</option>
                      <option value={3}>ES</option>
                      <option value={4}>NL</option>
                    </select>
                  </div> */}
                  {/* <button type="button" className="cmn-btn-alt cmn-btn" data-toggle="modal" data-target="#signUpModalLong">
                    Register
                  </button>
                  <div className="modal register fade" id="signUpModalLong" tabIndex={-1} role="dialog" aria-labelledby="signUpModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="signUpModalLongTitle">
                            <img src="images/logo.png" alt="image" />
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <img src="images/cross-icon-1.png" alt="image" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5 className="welcome">Welcome back</h5>
                          <p>Not a member? <a href="javascript:void(0)">REGISTER</a></p>
                          <div className="form-area">
                            <form action="#">
                              <div className="form-group">
                                <label>Email Address</label>
                                <input className="form-control" placeholder="Registered Email Address." type="email" />
                              </div>
                              <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" placeholder="Password" type="password" />
                              </div>
                              <div className="form-group d-flex justify-content-end">
                                <label><a href="javascript:void(0)">Not a member?</a></label>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="cmn-btn cmn-btn-alt"> Sign
                                  In</button>
                              </div>
                            </form>
                            <div className="reg-with">
                              <p>Register in directly with</p>
                              <div className="social-area d-flex justify-content-center">
                                <a href="javascript:void(0)"><img src="images/twitter.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/facebook.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/linkedin.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/google.png" alt="image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="cmn-btn  " data-toggle="modal" data-target="#signInModalLong">
                    Sign In
                  </button> */}
                  <button type="button" id="connect" onClick={()=>connectWallet()} className="cmn-btn"  >
                    Connect 
                  </button>
                  <div className="modal register fade" id="signInModalLong" tabIndex={-1} role="dialog" aria-labelledby="signInModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="signInModalLongTitle">
                            <img src="images/logo.png" alt="image" />
                          </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <img src="images/cross-icon-1.png" alt="image" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>Get started in a minute!</h5>
                          <p>Already have a account? <a href="javascript:void(0)">Login</a></p>
                          <div className="form-area">
                            <form action="#">
                              <div className="form-group">
                                <label>Email Address</label>
                                <input className="form-control" placeholder="Registered Email Address." type="email" />
                              </div>
                              <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" placeholder="Password" type="password" />
                              </div>
                              <div className="form-group d-flex">
                                <div className="checkbox_wrapper">
                                  <input type="checkbox" />
                                  <label />
                                </div>
                                <span className="check_span">I agree with <span>user
                                  agreement</span>, and confirm that I am at least 18
                                  years old!</span>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="cmn-btn cmn-btn-alt"> Register
                                  NOw!</button>
                              </div>
                            </form>
                            <div className="reg-with">
                              <p>Register in directly with</p>
                              <div className="social-area d-flex justify-content-center">
                                <a href="javascript:void(0)"><img src="images/twitter.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/facebook.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/linkedin.png" alt="image" /></a>
                                <a href="javascript:void(0)"><img src="images/google.png" alt="image" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
