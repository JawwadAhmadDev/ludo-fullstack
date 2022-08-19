import React, { useEffect } from 'react'
import NavBar from '../../component/NavBar'
import {toast} from 'react-toastify'
import "./css/bootstrap.min.css"
import "./css/slick.css"
import "./css/nice-select.css"
import "./css/animate.css"
import "./css/home.css"
import "./css/custom.css"
import { getWalletAddressOrConnect } from '../../../wallet'

import Web3 from 'web3';
import Contract from 'web3-eth-contract';

const Home = () => {
  
  const abi = require('../abi.json')
  const contractAddress = "0x56d2cb1ff1fbd90f9bde4f4a4d256961e4d3de80";

  useEffect(async ()=>{
    returnNow()
  },[])
  const returnNow = async (e) => {
    var acc = await getWalletAddressOrConnect()
    console.log("mywc is ", acc);
    if (typeof window.web3 !== 'undefined') {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      var web3Provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3")
      window.web3 = new Web3(web3Provider)
    }
    Contract.setProvider(window.web3.currentProvider);
    var contract = new Contract(abi, contractAddress);
    toast.success("DEVELOPMENT:Contract integrated , check methods in console ")
    console.log("Contract methods",  contract.methods)
    // console.log("about me " ,  await contract.methods.aboutMe().call())

    // const owner = await contract.methods.owner().call()
    // console.log("Owner is ", owner)
    // if (owner.toString().toUpperCase() == acc.toString().toUpperCase()) {
    //   return toast.error("You are  Owner,Owner cant return ticket");
    // } else {
    //   await contract.methods.returnTicket(ticketID, eventID).send({ from: acc })
    //   toast.success("Ticket Return  !!");
    //   window.location.reload()

    // }
  }

  return (
    <div className='home_page'>
      <div className="preloader" id="preloader" />
      <a href="javascript:void(0)" className="scrollToTop"><i className="fas fa-angle-double-up" /></a>
      <div>
        <NavBar />
      </div>
      <div>
        {/* banner-section start */}
        <section id="banner-section">
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="main-content">
                    <div className="top-area justify-content-center text-center">
                      <h1>Play &amp; gain <br /> <span>rewards</span></h1>
                      <p className='tw' >Free, Fun &amp; Fair Rewards For Everyone</p>
                      <button type="button" className="cmn-btn" data-toggle="modal" data-target="#signUpModalReg">
                        Start Playing!
                      </button>
                      <div className="modal register fade" id="signUpModalReg" tabIndex={-1} role="dialog" aria-labelledby="signUpModalRegTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="signUpModalRegTitle">
                                <img src="images/logo.png" alt="image" />
                              </h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <img src="images/cross-icon-1.png" alt="image" />
                              </button>
                            </div>
                            <div className="modal-body">
                              <h5 className="welcome">Welcome back</h5>
                              <p className='tw' >Not a member? <a href="">REGISTER</a></p>
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
                                  <p className='tw' >Register in directly with</p>
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
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <div className="ani-img">
                          <img className="cir-1" src="images/coin-1.png" alt="circle" />
                          <img className="cir-2" src="images/coin-2.png" alt="circle" />
                          <img className="cir-3" src="images/coin-3.png" alt="circle" />
                          <img className="cir-4" src="images/coin-4.png" alt="circle" />
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-lg-6">
                            <div className="bottom-area text-center">
                              <img src="images/banner-illu.png" alt="banner-circle" />
                            </div>
                          </div>
                        </div>
                        <div className="ani-illu">
                          <img className="left-1 wow fadeInUp" src="images/banner-left-obj.png" alt="image" />
                          <img className="right-2 wow fadeInUp" src="images/banner-right-obj.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-item pwe">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item d-flex">
                        <div className="left-area align-items-center">
                          <img src="images/banner-bottom-1.png" alt="image" />
                        </div>
                        <div className="right-area">
                          <h4>PLAY</h4>
                          <p className='tw'>A huge collection of web and mobile games.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item d-flex">
                        <div className="left-area align-items-center">
                          <img src="images/banner-bottom-2.png" alt="image" />
                        </div>
                        <div className="right-area">
                          <h4>WIN</h4>
                          <p className='tw'>Points and cash from playing and competing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-item d-flex">
                        <div className="left-area align-items-center">
                          <img src="images/banner-bottom-3.png" alt="image" />
                        </div>
                        <div className="right-area">
                          <h4>EARN</h4>
                          <p className='tw'>Your Wombucks or prize money from challenges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* Feature Game In start */}
        <section id="available-game-section">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-header">
                    <h2 className="title">Available Games</h2>
                    <p className='tw'>To meet today's challenges &amp; earn cryptocurrency</p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-end justify-cen">
                  <div className="right-area">
                    <a href="" className="cmn-btn-alt cmn-btn mr-3">TOP GAMES <img src="images/double-right.png" alt="image" /></a>
                    <a href="" className="cmn-btn-alt cmn-btn">Tournaments <img src="images/double-right.png" alt="image" /></a>
                  </div>
                </div>
              </div>
              <div className="row contained-area mb-30-none">
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <a href="/jackpot"><img src="images/top-game-1.png" alt="image" /></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <a href="/p2e"><img src="images/top-game-3.png" alt="image" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="level-up-section">
          <div className="overlay pt-120 pb-120">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-area d-flex justify-content-lg-center">
                    <img src="images/level-up-left.png" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="container wow fadeInUp">
                    <div className="row">
                      <div className="col-lg-10 align-items-center right-area">
                        <div className="section-header">
                          <h2 className="title">LEVEL UP! GET REWARDS</h2>
                          <p className='tw' >Each time you reach a new level you'll get a reward</p>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div className="single-item">
                              <img src="images/freespins-icon.png" alt="image" />
                              <h6>Freespins</h6>
                            </div>
                            <div className="single-item">
                              <img src="images/bonuses-icon.png" alt="image" />
                              <h6>BONUSES</h6>
                            </div>
                            <div className="single-item">
                              <img src="images/tournaments-icon.png" alt="image" />
                              <h6>TOURNAMENTS</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Level up In end */}
        {/* Todays winner In start */}
        <section id="todays-winner-section" className="home">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 d-grid align-items-center">
                  <div className="section-header">
                    <h2 className="title">Biggest <span>Winners</span> today</h2>
                    <button type="button" className="cmn-btn-alt cmn-btn" data-toggle="modal" data-target="#signUpModalWin">
                      Start Playing!
                    </button>
                    <div className="modal register fade" id="signUpModalWin" tabIndex={-1} role="dialog" aria-labelledby="signUpModalWinTitle" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="signUpModalWinTitle">
                              <img src="images/logo.png" alt="image" />
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <img src="images/cross-icon-1.png" alt="image" />
                            </button>
                          </div>
                          <div className="modal-body">
                            <h5 className="welcome">Welcome back</h5>
                            <p className='tw' >Not a member? <a href="javascript:void(0)">REGISTER</a></p>
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
                                <p className='tw' >Register in directly with</p>
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
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-end jus-end">
                  <div className="mid-area">
                    <img src="images/tropy.png" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="title-area">
                    <img src="images/ribbon.png" alt="image" />
                    <h5>Biggest Winners</h5>
                  </div>
                  <div className="winner-chart">
                    <span className="ribbon">Top Winner</span>
                    <div className="single-item d-flex justify-content-between align-items-center">
                      <div className="left-area d-flex align-items-center">
                        <img src="images/win-1.png" className="pos" alt="image" />
                        <a href="javascript:void(0)" className="name-area d-flex align-items-center">
                          <img src="images/user-1.png" alt="image" />
                          <h6>Bessie Cooper</h6>
                        </a>
                      </div>
                      <div className="win-price">
                        <span>+</span>
                        <span>56.65994</span>
                        <span className="cur">ETH</span>
                        <span><img src="images/double-right-alt.png" alt="image" /></span>
                      </div>
                    </div>
                    <div className="single-item d-flex justify-content-between align-items-center">
                      <div className="left-area d-flex align-items-center">
                        <img src="images/win-2.png" className="pos" alt="image" />
                        <a href="javascript:void(0)" className="name-area d-flex align-items-center">
                          <img src="images/user-2.png" alt="image" />
                          <h6>Jerome Bell</h6>
                        </a>
                      </div>
                      <div className="win-price">
                        <span>+</span>
                        <span>56.65994</span>
                        <span className="cur">ETH</span>
                        <span><img src="images/double-right-alt.png" alt="image" /></span>
                      </div>
                    </div>
                    <div className="single-item d-flex justify-content-between align-items-center">
                      <div className="left-area d-flex align-items-center">
                        <img src="images/win-3.png" className="pos" alt="image" />
                        <a href="javascript:void(0)" className="name-area d-flex align-items-center">
                          <img src="images/user-3.png" alt="image" />
                          <h6>Darrell Steward</h6>
                        </a>
                      </div>
                      <div className="win-price">
                        <span>+</span>
                        <span>56.65994</span>
                        <span className="cur">ETH</span>
                        <span><img src="images/double-right-alt.png" alt="image" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Todays winner In end */}
        {/* Counter In start */}
        <section id="counter-section">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row mb-40-none">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item mb-40 text-center">
                    <img src="images/counter-icon-1.png" alt="image" />
                    <span className="count">$ <span className="counter">133501</span></span>
                    <h6>JACKPOT</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item text-center">
                    <img src="images/counter-icon-2.png" alt="image" />
                    <span className="count">$ <span className="counter">81237619</span></span>
                    <h6>TOTAL PAID</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item text-center">
                    <img src="images/counter-icon-3.png" alt="image" />
                    <span className="count"><span className="counter">100</span>%</span>
                    <h6>SECURE</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item mb-40 text-center">
                    <img src="images/counter-icon-4.png" alt="image" />
                    <span className="count"><span className="counter">24</span>/<span className="counter">7</span></span>
                    <h6>SUPPORT</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter In end */}
        {/* Latest Activites In start */}
        <section id="latest-activites-section">
          <div className="ani-div">
            <img className="obj-1" src="images/star.png" alt="image" />
            <img className="obj-2" src="images/star.png" alt="image" />
            <img className="obj-3" src="images/star-2.png" alt="image" />
          </div>
          <div className="overlay pt-120">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-header">
                    <h2 className="title">Latest Activites</h2>
                    <p className='tw' >Each time you reach a new level you'll get a reward</p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-end justify-cen">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="bets-tab" data-toggle="tab" href="#bets" role="tab" aria-controls="bets" aria-selected="true">Latest Bets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contest-tab" data-toggle="tab" href="#contest" role="tab" aria-controls="contest" aria-selected="false">Contest</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="bets" role="tabpanel" aria-labelledby="bets-tab">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-start" scope="col">Game</th>
                              <th scope="col">Player</th>
                              <th scope="col">Bet ID</th>
                              <th scope="col">Payout</th>
                              <th scope="col">Profit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-1.png" alt="image" />Fishing Disco</a></th>
                              <td>Bessie Cooper</td>
                              <td>30320267096</td>
                              <td>0.70X</td>
                              <td><img src="images/table-icon-1.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-2.png" alt="image" />Ninjax</a></th>
                              <td>Eleanor Pena</td>
                              <td>30320267096</td>
                              <td>2.21X</td>
                              <td><img src="images/table-icon-2.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-3.png" alt="image" />Dragons Gate</a></th>
                              <td>Cody Fisher</td>
                              <td>30320267096</td>
                              <td>3.01X</td>
                              <td><img src="images/table-icon-3.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-4.png" alt="image" />King of Glory</a></th>
                              <td>Arlene McCoy</td>
                              <td>30320267096</td>
                              <td>1.11X</td>
                              <td><img src="images/table-icon-4.png" alt="image" />- 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-5.png" alt="image" />Dice</a></th>
                              <td>Leslie Alexander</td>
                              <td>30320267096</td>
                              <td>0.00X</td>
                              <td><img src="images/table-icon-5.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-6.png" alt="image" />League Of Legends</a></th>
                              <td>Theresa Webb</td>
                              <td>30320267096</td>
                              <td>3.19X</td>
                              <td><img src="images/table-icon-6.png" alt="image" />+ 0.00312150</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contest" role="tabpanel" aria-labelledby="contest-tab">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-start" scope="col">Game</th>
                              <th scope="col">Player</th>
                              <th scope="col">Bet ID</th>
                              <th scope="col">Payout</th>
                              <th scope="col">Profit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-1.png" alt="image" />Fishing Disco</a></th>
                              <td>Bessie Cooper</td>
                              <td>30320267096</td>
                              <td>0.70X</td>
                              <td><img src="images/table-icon-1.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-2.png" alt="image" />Ninjax</a></th>
                              <td>Eleanor Pena</td>
                              <td>30320267096</td>
                              <td>2.21X</td>
                              <td><img src="images/table-icon-2.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-3.png" alt="image" />Dragons Gate</a></th>
                              <td>Cody Fisher</td>
                              <td>30320267096</td>
                              <td>3.01X</td>
                              <td><img src="images/table-icon-3.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-4.png" alt="image" />King of Glory</a></th>
                              <td>Arlene McCoy</td>
                              <td>30320267096</td>
                              <td>1.11X</td>
                              <td><img src="images/table-icon-4.png" alt="image" />- 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-5.png" alt="image" />Dice</a></th>
                              <td>Leslie Alexander</td>
                              <td>30320267096</td>
                              <td>0.00X</td>
                              <td><img src="images/table-icon-5.png" alt="image" />+ 0.00312150</td>
                            </tr>
                            <tr>
                              <th scope="row"><a href="javascript:void(0)"><img src="images/game-icon-6.png" alt="image" />League Of Legends</a></th>
                              <td>Theresa Webb</td>
                              <td>30320267096</td>
                              <td>3.19X</td>
                              <td><img src="images/table-icon-6.png" alt="image" />+ 0.00312150</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Available Game In end */}
        {/* faq start */}
        <section id="faq-section">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2 className="title">Our most common questions</h2>
                    <p className='tw' >Do you have a question about gainio? Please contact us! We would love
                      to answer your questions.</p>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 d-flex align-items-center cus-mb">
                  <div className="left-area">
                    <span>
                      <img src="images/faq-left.png" alt="image" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-7 wow fadeInUp">
                  <div id="accordion-one">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0">
                          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Are there any benefits other than money?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is a challenge, and how do I join one?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Who do I compete against in the challenges?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <h6 className="mb-0">
                          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            How does G-Loot collect game data?
                          </button>
                        </h6>
                      </div>
                      <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion-one">
                        <div className="card-body">
                          <p className='tw' >Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante.
                            Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu nisl.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq end */}
        {/* Footer Section start */}
        <footer id="footer-section">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-top pt-120 pb-120">
                    <div className="side-contant">
                      <div className="left">
                        <img className="bg" src="images/footer-left-bg.png" alt="image" />
                        <img className="bg circle" src="images/footer-left-circle.png" alt="image" />
                        <img className="top" src="images/footer-left-top.png" alt="image" />
                      </div>
                      <div className="right">
                        <img src="images/footer-right.png" alt="image" />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-6 col-sm-10">
                        <div className="section-header text-center">
                          <h4 className="title">Want gaming &amp; esports news straight to your inbox?</h4>
                          <p className='tw' >To Get Exclusive Benefits</p>
                        </div>
                        <form action="#">
                          <div className="subscribe">
                            <input type="email" placeholder="Enter Your Email Address" />
                            <button className="btn">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-area pt-120">
                <div className="row d-flex header-area">
                  <div className="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center">
                    <div className="logo-section">
                      <a className="site-logo site-title" href="/"><img src="images/logo.png" alt="site-logo" /></a>
                    </div>
                    <ul className="navbar-nav main-menu d-flex align-items-center">
                      <li><a href="/" className="active">Home</a></li>
                      <li><a href="/">Games</a></li>
                      <li><a href="/">Tournaments</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div className="social-area d-flex">
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
          <div className="footer-bottom">
            <div className="container">
              <div className="main-content">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start align-items-center justify-cen order-pro">
                    <div className="left-area">
                      <p className='tw' >Copyright © Gainio | Designed by
                        <a href="https://themeforest.net/user/pixelaxis">Pixelasis</a>. ALL RIGHTS RESERVED
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
                    <div className="right-area">
                      <select name="lang" style={{ display: 'none' }}>
                        <option style={{ color: 'white' }} value="en">English</option>
                        <option style={{ color: 'white' }} value="bn">Bangla</option>
                        <option style={{ color: 'white' }} value="hn">Hindi</option>
                      </select>
                      <div className="nice-select" tabIndex={0}>
                        <span className="current tw " >English</span>
                        <ul className="list lang_list"><li data-value="en" className="option selected">English</li><li data-value="bn" className="option">Bangla</li><li data-value="hn" className="option">Hindi</li></ul></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home