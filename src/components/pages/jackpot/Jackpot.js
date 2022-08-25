import React, { useEffect , useState } from 'react'
import { connectWallet, isWalletConnected } from '../../../wallet'
import Countdown from 'react-countdown';
import "./jackpot.css"
import CustomCountDown from './CountDown';
const Jackpot = () => {
const [walletStatus, setWalletStatus] = useState("CONNECT WALLET")
  useEffect(() => {
    connectWallet()
    if(isWalletConnected) {
      setWalletStatus("WALLET CONNECTED")
    }

    var nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark');
      } else {
        nav.classList.remove('bg-dark', 'shadow')
      }
    });
  }, [])


  return (
    <div className='jackpot_page'>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="pimages/JACKPOT_SYSTEM.png" className="img-fluid" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/space-miner">Space Miner</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tournaments</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><img src="pimages/telegram.png" className="mx-2 img-fluid" width="30px" height="30px" alt="" />Telegram</a></li>
              </ul>
              <a href="#" className="header-btn" onClick={() => connectWallet()}>
                <button className='btn btn-jk-connect '>{walletStatus}</button>
              </a>
            </div>
          </div>
        </nav>
        <section className="banner">
          <div className="container">
            <div className="mid-text text-center">
              <img src="pimages/mid text.png" className="img-fluid" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-5 fast-text">
                <p className="text-white heading-one">Earn Big Today!</p>
                <div className='countdown'>
                  <CustomCountDown/>
                </div>
                <div className="d-flex">
                  <p className="text-white">Big Bang Loading</p>
                  <p className="text-white">57.9%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '57.9%' }} aria-valuenow="57.9" aria-valuemin={0} aria-valuemax={100} />
                </div>
                <a href="#"><img src="pimages/BTN-2.png" className="img-fluid mt-5 " alt=" " /></a>
              </div>
              <div className=" col-lg-2">
              </div>
              <div className="col-lg-5">
                <form className='jkform' action>
                  <p className="heading-two">Buy Now</p>
                  <label htmlFor><img src="pimages/image 5.png" className="img-fluid me-3 my-3" alt="" />BNB <i className="fa-solid fa-caret-down" /></label> <br />
                  <input className='input' type="text" placeholder={25} />
                  <div className="d-flex my-3">
                    <p>≈ $ 6.21 k</p>
                    <p>Balance: 0.00</p>
                  </div>
                  <div className="mid-arrow">
                    <img src="pimages/Vector.png" className="img-fluid" alt="" />
                  </div>
                  <label htmlFor><img src="pimages/5.png" className="img-fluid me-3 my-3" alt="" />GMZ</label> <br />
                  <input className='input' type="text" placeholder="780.855733385871334857" />
                  <div className="d-flex my-3">
                    <p>≈ $ 6.21 k</p>
                    <p>Balance: 0.00</p>
                  </div>
                  <a href="#"><img src="pimages/btn-3.png" className="img-fluid" alt="" /></a>
                  <p className="fo-last my-3">Charts | Buy Crypto</p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="share">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="red-white">Winner’s <span>Share</span></p>
                <div className="d-flex winner">
                  <img src="pimages/Rectangle 5230 (1).png" className="img_mobile" width="122px" height="146px" alt="" />
                  <div className="winner-one">
                    <p className="text-one">1F1tAaz5x1HUX</p>
                    <p className="text-two">$3,000.00</p>
                  </div>
                  <p className="divided" />
                  <div className="winner-two">
                    <p className="text-one"><img src="pimages/image 5.png" className="img-fluid me-2" alt="" />4.21</p>
                    <p className="text-two"><img src="pimages/5.png" className="img-fluid me-2" alt="" />341.423</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mobile">
                <p className="red-white">Buyback’s <span>Share</span></p>
                <div className="d-flex winner">
                  <img src="pimages/Rectangle 5230 (2).png" className="img_mobile" width="122px" height="146px" alt="" />
                  <div className="winner-one">
                    <p className="text-one">CNLbtMn4xq</p>
                    <p className="text-two">$5999.00</p>
                  </div>
                  <p className="divided" />
                  <div className="winner-two">
                    <p className="text-one"><img src="pimages/image 5.png" className="img-fluid me-2" alt="" />44.21</p>
                    <p className="text-two"><img src="pimages/5.png" className="img-fluid me-2" alt="" />1341.423</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-works text-center">
          <div className="container">
            <p className="text-center  my-5 heading-one">How <span>It Works!</span></p>
            <div className="row">
              <div className="col-lg-4 one">
                <img src="pimages/buy 1.png" className="img-fluid mb-5" alt="" />
                <p>2% of every buy and 5% of every sell is converted into BNB and sent to the Jackpot.</p>
              </div>
              <div className="col-lg-4 two">
                <img src="pimages/anniversary.png" className="img-fluid mb-5" alt="" />
                <p>If there are no buys worth at least 0.1 BNB for 10 whole minutes, the last buyer gets 50% of the Jackpot
                  transferred directly to his personal wallet.</p>
              </div>
              <div className="col-lg-4 three">
                <img src="pimages/investor 1.png" className="img-fluid mb-5" alt="" />
                <p>This will create a constant buy pressure, as multiple investors will try to win the Jackpot.</p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-2">
              </div>
              <div className="col-lg-4 four">
                <img src="pimages/bank 1.png" className="img-fluid mb-5" alt="" />
                <p>At the same time, if you bought in and didn't win, you can watch your investment steadily rise as more buys
                  come to increase the Dollar worth of your investment.
                </p>
              </div>
              <div className="col-lg-4 five">
                <img src="pimages/wallet (2) 1.png" className="img-fluid mb-5" alt="" />
                <p>A custom Telegram bot will announce constantly when the 10 minute timer will expire and show the last
                  buyer's wallet.
                </p>
              </div>
              <div className="col-lg-2">
              </div>
            </div>
          </div>
        </section>
        <section className="big-bang my-5 ">
          <div className="container">
            <p className="text-center py-5 heading-all">The <span>Big Bang</span></p>
            <div className="row">
              <div className="col-lg-7">
                <div className="d-flex ">
                  <p className="divided-one mr-4" />
                  <p className="text-big-bang">A jackpot needs to have a limit, as an unlimited growth would cause it to
                    mathematically never be won. We will fix this problem by setting the hard-cap for the jackpot at 50.000
                    USD.</p>
                </div>
                <div className="d-flex my-5">
                  <p className="divided-one mr-4" />
                  <p className="text-big-bang">If the jackpot is not won by anyone, at the amount of 50.000 USD, a forced cash-out
                    takes place. This cash-out buys back half of the jackpot in one single transaction which we call The Big
                    Bang.</p>
                </div>
                <div className="d-flex mb-5">
                  <p className="divided-one mr-4" />
                  <p className="text-big-bang">The anticipation towards The Big Bang can lead to even greater FOMO, as the token
                    price will increase strongly after The Big Bang took place. At the same time, with great transactional
                    volume,</p>
                </div>
              </div>
              <div className="col-lg-5">
                <img src="pimages/4800_3_08-[Converted].png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="rules my-5">
          <div className="container">
            <p className="text-center py-5 heading-all">Rules<span> For Buying &amp; Selling</span></p>
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex  py-5 ps-4 pe-5">
                  <div className="image-rules">
                    <img src="pimages/Illustration.png" className="img-fluid" alt="" />
                  </div>
                  <div className="text">
                    <p className="head">For Buying</p>
                    <div className="items">
                      <p>1. 2% Liquidity</p>
                      <p>2. 2% Marketing</p>
                      <p>3. 2% Team</p>
                      <p>4. 2% Jackpot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex tow py-5 ps-4 pe-5">
                  <div className="image-rules">
                    <img src="pimages/Illustration (1).png" className="img-fluid" alt="" />
                  </div>
                  <div className="text">
                    <p className="head">for selling</p>
                    <div className="items">
                      <p>1. 2% Liquidity</p>
                      <p>2. 3% Marketing</p>
                      <p>3. 2% Team</p>
                      <p>4. 5% Jackpot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="jackpot my-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6">
                <p className="py-5 heading-all">The<span> Jackpot</span></p>
                <p className="one">If for 10 minutes no buy of minimum approximately 0.1 BNB worth of $LAS occurs, 55.55% of the
                  jackpot wallet gets cashed out. Both BNB in the contract and the LAS tokens that are still not converted
                  into BNB are take into account for the cash-out.
                </p>
                <ul>
                  <li className="one">90% of the cash out goes to the last buyer.</li>
                  <li className="one">10% to boost the project through marketing or through buy backs.</li>
                </ul>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="pimages/jackpot.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img src="pimages/call-to-action-left.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 my-5">
                <p className="sub-heading">Subscribe Us</p>
                <p className="sub-p">To Get Exclusive Benefits And
                  Win Rewards</p>
                <div className='email_form'>
                  <input className='input' type="email" placeholder="Enter your email" />
                  <a href="" className='email_btn'><img src="pimages/email-btn.png" className="img-fluid" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-2"> </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3">
                <img src="pimages/JACKPOT SYSTEM.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-2">
                <p className="f-head">Company</p>
                <p className="f-p">Home</p>
                <p className="f-p">About us</p>
                <p className="f-p">Tournaments</p>
                <p className="f-p">Games</p>
                <p className="f-p">contact us</p>
              </div>
              <div className="col-lg-2">
                <p className="f-head">Legal Info</p>
                <p className="f-p">Security</p>
                <p className="f-p">Faq</p>
                <p className="f-p">Privacy policy</p>
                <p className="f-p">Term of Service</p>
                <p className="f-p">Complaints Policy</p>
              </div>
              <div className="col-lg-2">
                <p className="f-head">My Account</p>
                <p className="f-p">Login</p>
                <p className="f-p">Register</p>
                <p className="f-p">Account Verificatin</p>
                <p className="f-p">Safety &amp; Security</p>
              </div>
              <div className="col-lg-3">
                <p className="f-head">Our Social Media</p>
                <div className="d-flex">
                  <p className="f-p"><i className="fa-brands fa-facebook" /></p>
                  <p className="f-p"><i className="fa-brands fa-twitter mx-4" /></p>
                  <p className="f-p"><i className="fa-brands fa-instagram me-4" /></p>
                  <p className="f-p"><i className="fa-brands fa-google-plus-g" /></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="copy-right py-5">Copyright © 2022 Jackpot System.All Rights Reserved.</p>
        </footer>
      </div>

    </div>
  )
}

export default Jackpot