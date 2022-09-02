import React, { useEffect, useState } from 'react'
import { connectWallet, getWalletAddressOrConnect, web3 } from '../../../wallet'
import "./jackpot.css"
import CustomCountDown from './CountDown';
import { toast } from 'react-toastify';
import { fetchContract, walletShortFormer } from '../../../utils';
import { useRecoilState } from 'recoil'
import { walletState } from '../../../state/Wallet';
import TransectionPendingModal from '../../component/TransectionPendingModal';


const Jackpot = () => {
  const [open, setOpen] = useState(false)
  const [isCongrate, setIsCongrate] = useState(false)
  const [walletStateValue, setWalletState] = useRecoilState(walletState)
  var contract;

  useEffect(async () => {
    var nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark');
      } else {
        nav.classList.remove('bg-dark', 'shadow')
      }
    });




  }, [])

  async function checkIsAuthorised() {
    var tx = await contract.methods.isAuthorized(walletStateValue.userWallet).call();
    return tx
  }

  const fundJackpot = async (e) => {
    contract = await fetchContract()
    var userWallet = await getWalletAddressOrConnect()
    var bnbAmount = 0.1
    toast.info("Transection Mining Please wait ")
    setOpen(true)
    contract.methods.fundJackpot(0).send({ from: userWallet, value: web3.utils.toWei(bnbAmount.toString()) })
      .then(tx => {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        setIsCongrate(true)
        setOpen(false)
        console.log(tx)
        toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Funded Success ! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
      })
      .catch(err => {
        toast.error(err.message)
      })
    // var isAuthorised = await checkIsAuthorised(walletStateValue.userWallet);
    // if (isAuthorised) {
    //   var bnbAmount = 0.1
    //   toast("Transection Mining Please wait ", { autoClose: false })
    //   contract.methods.fundJackpot(0).send({ from: walletStateValue.userWallet, value: web3.utils.toWei(bnbAmount.toString()) })
    //     .then(tx => {
    //       console.log(tx)
    //       toast.success("Jackpot funding success !!");
    //     })
    //     .catch(err => {
    //       toast.error(err.message)
    //     })
    // } else {
    //   axios.get(`${backendURL()}/api/wallet/find/${walletStateValue.userWallet}`)
    //     .then(res => {
    //       if (res.data?.length > 0) {
    //         toast.success("Your authorization  request still in pending , please wait !")
    //       } else {
    //         toast.error("You are not Authorized, please contact with  Owner to get Authorized")
    //         document.getElementById('req_modal').click()
    //       }
    //     })
    //     .catch(err => {
    //       console.log("err response", err.response)
    //     })
    // }
  };


  return (
    <div className='jackpot_page '>
      <TransectionPendingModal open={open} setOpen={setOpen} />

      {
        isCongrate ?
          <div className='c_overlay'></div> : ''
      }
      {
        isCongrate ?

          <div className='congrate_container' >
            <div className='congrate'  >
              <div className="checkmark-circle">
                <div className="background"></div>
                <div className="checkmark draw"></div>
              </div>
              <h1 style={{ color: '#7000d3' }}>Congratulations!</h1>
              <p>Your Investment Success !</p>
              <button className="submit-btn" onClick={e => setIsCongrate(false)} >Continue</button>
            </div>
          </div> : ''
      }


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
                {
                  walletStateValue.isOwner ?
                    <li className="nav-item"><a target='_blank' className="nav-link" href="/dashboard">Dashboard</a></li>
                    : ''
                }
                {/* <li className="nav-item"><a className="nav-link" href="#">About</a></li> */}
                <li className="nav-item"><a className="nav-link" href="/space-miner">Space Miner</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tournaments</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><img src="pimages/telegram.png" className="mx-2 img-fluid" width="30px" height="30px" alt="" />Telegram</a></li>
              </ul>
              <a href="#" className="header-btn" onClick={() => connectWallet()}>
                <button className='btn btn-jk-connect '>  {walletStateValue.isWalletConnected ? walletShortFormer(walletStateValue.userWallet) : "Connect Wallet"}</button>
              </a>
            </div>
          </div>
        </nav>
        <section className="banner">
          <div className="container ">
            <div className="mid-text text-center">
              <img src="pimages/mid text.png" className="img-fluid" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-5 fast-text">
                <p className="text-white heading-one cp_font">Earn Big Today!</p>
                <div className='countdown'>
                  <CustomCountDown time={walletStateValue.timespan} />
                </div>
                <div className="d-flex">
                  <p className="text-white cp_font">Big Bang Loading</p>
                  <p className="text-white">57.9%</p>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '57.9%' }} aria-valuenow="57.9" aria-valuemin={0} aria-valuemax={100} />
                </div>
                {/* <span className='c_pointer' onClick={() => fundJackpot()}  ><img src="pimages/BTN-2.png" className="img-fluid mt-5 " /></span> */}
                <button className='btn queck_buy_btn mt-4 cp_font' onClick={e => fundJackpot(e)}>Quick Buy (0.1 BNB)</button>
                {/* <AuthRequestModal walletAddress={walletStateValue.userWallet} /> */}
              </div>
              <div className=" col-lg-2">
              </div>
              <div className="col-lg-5">
                <form className='jkform' action>
                  <p className="heading-two cp_font">Buy Now</p>
                  <label className='r_font'>
                    <img src="pimages/image 5.png" className="img-fluid me-3 my-3" alt="Buy Now " />BNB <i className="fa-solid fa-caret-down" />
                  </label> <br />
                  <input className='input r_font' type="text" placeholder={25} />
                  <div className="d-flex my-3">
                    <p className='r_font'>≈ $ 6.21 k</p>
                    <p className='r_font'>Balance: 0.00</p>
                  </div>
                  <div className="mid-arrow">
                    <img src="pimages/Vector.png" className="img-fluid" alt="" />
                  </div>
                  <label htmlFor className='r_font'><img src="pimages/5.png" className="img-fluid me-3 my-3" alt="" />GMZ</label> <br />
                  <input className='input r_font' type="text" placeholder="780.855733385871334857" />
                  <div className="d-flex my-3">
                    <p className='r_font'>≈ $ 6.21 k</p>
                    <p className='r_font'>Balance: 0.00</p>
                  </div>
                  <div className='text-center'>
                    <a href="#"><img src="pimages/btn-3.png" className="img-fluid" alt="" /></a>
                  </div>
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
                <p className="red-white cp_font">Winner’s <span>Share</span></p>
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
                <p className="red-white cp_font">Buyback’s <span>Share</span></p>
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
          <div className="col-md-10 offset-md-1">
            <p className="text-center  my-5 heading-one cp_font">How <span>It Works!</span></p>
            <div className="row">
              {/* <div className='offset-md-1'></div> */}
              <div className="col-lg-2 one">
                <div className='bg_overlay'>
                  <img src="pimages/buy 1.png" className="img-fluid mb-2" alt="" />
                  <p>2% of every buy and 5% of every sell is converted into BNB and sent to the Jackpot.</p>
                </div>
              </div>
              <div className="col-lg-2 two">
                <img src="pimages/anniversary.png" className="img-fluid mb-2" alt="" />
                <p>If there are no buys worth at least 0.1 BNB for 10 whole minutes, the last buyer gets 50% of the Jackpot
                  transferred directly to his personal wallet.</p>
              </div>
              <div className="col-lg-2 three">
                <img src="pimages/investor 1.png" className="img-fluid mb-2" alt="" />
                <p>This will create a constant buy pressure, as multiple investors will try to win the Jackpot.</p>
              </div>
              <div className="col-lg-2 four">
                <img src="pimages/bank 1.png" className="img-fluid mb-2" alt="" />
                <p>At the same time, if you bought in and didn't win, you can watch your investment steadily rise as more buys
                  come to increase the Dollar worth of your investment.
                </p>
              </div>
              <div className="col-lg-2 five">
                <img src="pimages/wallet (2) 1.png" className="img-fluid mb-2" alt="" />
                <p>A custom Telegram bot will announce constantly when the 10 minute timer will expire and show the last
                  buyer's wallet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="big-bang my-5 ">
          <div className="container">
            <p className="text-center py-5 heading-all cp_font">The <span>Big Bang</span></p>
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
            <p className="text-center py-5 heading-all cp_font" style={{ textTransform: 'uppercase' }}>token<span>omics</span></p>
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex  py-5 ps-4 pe-5">
                  <div className="image-rules">
                    <img src="pimages/Illustration.png" className="img-fluid" alt="" />
                  </div>
                  <div className="text">
                    <p className="head cp_font">For Buying</p>
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
                    <p className="head cp_font">For selling</p>
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
                <p className="py-5 heading-all cp_font">The<span> Jackpot</span></p>
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
                <p className="sub-heading cp_font">Subscribe Us</p>
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
                <h4 className='bn_font' style={{
                  fontWeight: '500',
                  fontSize: '35px'
                }} >Jackpot System</h4>
              </div>
              <div className="col-lg-2">
                <p className="cp_font f-head">Company</p>
                <p className="cp_font f-p">Home</p>
                <p className="cp_font f-p">About us</p>
                <p className="cp_font f-p">Tournaments</p>
                <p className="cp_font f-p">Games</p>
                <p className="cp_font f-p">contact us</p>
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
          <p className="m-0 copy-right py-5">Copyright © 2022 Jackpot System.All Rights Reserved.</p>
        </footer>
      </div>

    </div>
  )
}

export default Jackpot