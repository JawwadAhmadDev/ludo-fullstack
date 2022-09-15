import React, { useEffect } from "react"; 
import { connectWallet } from "../../wallet";
import {useRecoilState} from 'recoil'
import { walletState } from "../../state/Wallet";
import { walletShortFormer } from "../../utils";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [walletStateValue, setWalletState] =useRecoilState(walletState) 
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
                      <li><Link to="/jackpot">Jackpot</Link></li>
                      <li><Link to="/space-miner">Cash</Link></li>
                    </ul>
                  </li>
                  <li className="menu_has_children"><a href="#0">Tournaments</a>
                    <ul className="sub-menu">
                      <li><Link to="/">Tournaments</Link></li>
                      <li><Link to="/">Tournaments Details</Link></li>
                    </ul>
                  </li>
                  <li className="menu_has_children"><a href="#0">Pages</a>
                    <ul className="sub-menu">
                      <li><Link to="/">About Us</Link></li>
                      <li><Link to="/">Winners</Link></li>
                      <li><Link to="/">Faq</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className="   right-area header-action d-flex align-items-center"> 
                  
              <a href="#" className="header-btn" onClick={() => connectWallet()}>
                <button className='btn btn-jk-connect '>{walletStateValue.isWalletConnected ?<span   id="wallet_address" >{ walletShortFormer(walletStateValue.userWallet)}</span>:"Connect Wallet"}</button>
              </a>
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
                          <p>Already have a account? <a href="/">Login</a></p>
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
                                <a href="/"><img src="images/twitter.png" alt="image" /></a>
                                <a href="/"><img src="images/facebook.png" alt="image" /></a>
                                <a href="/"><img src="images/linkedin.png" alt="image" /></a>
                                <a href="/"><img src="images/google.png" alt="image" /></a>
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
