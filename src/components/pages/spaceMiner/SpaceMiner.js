import React, { useEffect , useState} from 'react'
import { connectWallet, isWalletConnected } from '../../../wallet'
import "./css/spaceMiner.css"
const SpaceMiner = () => {

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
        <div className='space_miner'>
            <div>
                <nav className="navbar navbar-expand-lg  fixed-top">
                    <div className="container">
                        <a className="navbar-brand spnavbar-brand" href="/">Space miners</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link spnav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link " href="#">Games</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link" href="jack-pot/jackpot.html">Tournaments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link" href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link mx-2" style={{ color: 'white' }}>
                                        <span className="mx-2">
                                            <img src="spimages/telegram.png" className="img-fluid" alt="" />
                                        </span>
                                        Telegram
                                    </a>
                                </li>
                            </ul>
                            <a className="d-flex nav-link spnav-link spconnect" onClick={() => connectWallet()}> {walletStatus} </a>
                        </div>
                    </div>
                </nav>
                <div className="banner spbanner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 top-down">
                                <p className="text-one">put your footprint in </p>
                                <p className="text-uppercase text-two">space miner</p>
                                <a href="#"><img className="img-fluid" src="spimages/btn.png" alt="" /></a>
                            </div>
                            <div className="col-lg-6"> </div>
                        </div>
                    </div>
                </div>
                <div className="scetion-statistics">
                    <div className="container">
                        <div className="row py-5">
                            <p className="text-uppercase text-white">see the</p>
                            <img src="spimages/Statistics.png" className="img-fluid" alt="" />
                        </div>
                        <div className="box px-4 py-2">
                            <div className="row p-3">
                                <div className="col-lg-3">
                                    <div className="mini-box d-flex">
                                        <div className="mini-box d-flex">
                                            <img src="spimages/25.png" className="img-fluid mx-2 my-3 box-img" alt="" />
                                            <div className="l-box py-3">
                                                <p className="text-white">Total Staked</p>
                                                <p className="color-g">15900</p>
                                            </div>
                                        </div>
                                        <img src="spimages/Rectangle 5229.png" className="img-fluid border-one" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="mini-box d-flex">
                                        <div className="mini-2 d-flex"><img src="spimages/26.png" className="img-fluid my-3 mx-2 box-img" alt="" />
                                            <div className="l-box py-3">
                                                <p className="text-white">Total Referral</p>
                                                <p className="color-g">15900</p>
                                            </div></div>
                                        <img src="spimages/Rectangle 5229.png" className="img-fluid border-one" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="mini-box d-flex">
                                        <div className="mini-2 d-flex"><img src="spimages/30.png" className="img-fluid my-3 mx-2 box-img" alt="" />
                                            <div className="l-box py-3">
                                                <p className="text-white">Contract Bal </p>
                                                <p className="color-g">15900</p>
                                            </div>
                                        </div>
                                        <img src="spimages/Rectangle 5229.png" className="img-fluid border-one" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="mini-box d-flex">
                                        <div className="mini-2 d-flex"><img src="spimages/24.png" className="img-fluid my-3 mx-2 box-img" alt="" />
                                            <div className="l-box py-3">
                                                <p className="text-white">Total Farmers</p>
                                                <p className="color-g">15900</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md10 offset-md1'>
                                    <div className='row'>
                                        <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1.png" className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1 (1).png" className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1 (2).png" className="img-fluid" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-benifits">
                    <div className="container">
                        <div className="row">
                            <p className="text-uppercase text-white">Our</p>
                            <img src="spimages/benefits.png" className="img-fluid" alt="" />
                        </div>
                        <div className="text-box d-flex">
                            <div className="text-box-one">
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>6% Daily ~ 2190% APR</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>7% Referrals</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>4 Hours Withdraw Cooldown</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>10 Times Mandatory Compound Feature</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>Anti-Bot Launch
                                </p>
                            </div>
                            <div className="text-box-two">
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>6% Daily ~ 2190% APR</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>7% Referrals</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>4 Hours Withdraw Cooldown</p>
                                <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>10 Times Mandatory Compound Feature</p>
                            </div>
                        </div>
                        <p className="text-white last-text p-4">
                            We believe that helping people on this planet that live below the breadline is important and we all need to play our part. Crypto Phil has started a campaign to donate 1 day per month income to those in need. We salute Phil for this and will be donating 0.3% of the TVL to this cause. Follow Crypto Phil on YouTube to see these funds in action and see how you can do your part. Here's a video on where the charity funds will go. <a href="#">Click Here!</a>
                        </p>
                    </div>
                </div>
                <div className="section-dashboard pb-5">
                    <div className="container">
                        <div className="row">
                            <p className="text-uppercase">former <img src="spimages/Dashboard.png" alt="" /></p>
                            <div className="col-md-6">
                                <img src="spimages/29.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 col-two">
                                <div className="wallter-box p-1">
                                    <div className="one d-flex px-5 py-3">
                                        <img src="spimages/31.png" className="img-fluid my-2" alt="" />
                                        <div className="text-one mx-3">
                                            <p className="text-white">Initial Deposit</p>
                                            <p className="color-G">50,000 BNB</p>
                                        </div>
                                        <img src="spimages/30.png" className="mx-5 my-3" alt="" />
                                    </div>
                                </div>
                                <div className="wallter-box p-1 my-4 leftm-50">
                                    <div className="one d-flex px-5 py-3">
                                        <img src="spimages/32.png" className="img-fluid my-2" alt="" />
                                        <div className="text-one mx-3">
                                            <p className="text-white">Total Deposit</p>
                                            <p className="color-G">50,000 BNB</p>
                                        </div>
                                        <img src="spimages/30.png" className="mx-5 my-3" alt="" />
                                    </div>
                                </div>
                                <div className="wallter-box p-1 my-4 leftm-60">
                                    <div className="one d-flex px-5 py-3">
                                        <img src="spimages/33.png" className="img-fluid my-2" alt="" />
                                        <div className="text-one mx-3">
                                            <p className="text-white">Withdrawn</p>
                                            <p className="color-G">38,590 BNB</p>
                                        </div>
                                        <img src="spimages/30.png" className="mx-5 my-3" alt="" />
                                    </div>
                                </div>
                                <div className="wallter-box p-1">
                                    <div className="one d-flex px-5 py-3">
                                        <img src="spimages/26.png" className="img-fluid my-2" alt="" />
                                        <div className="text-one mx-3">
                                            <p className="text-white">Referrals</p>
                                            <p className="color-G">150 BNB</p>
                                        </div>
                                        <img src="spimages/30.png" className="mx-5 my-3" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-hire">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 py-4">
                                <div className="main-box d-block">
                                    <div className="box-hire p-2">
                                        <p className="text-white p-5">Hiring Example</p>
                                        <div className="box-hire-one d-flex">
                                            <img src="spimages/30.png" className="mx-2" alt="" />
                                            <div className="box-hire-one-text mx-2">
                                                <p>1 BNB = 0 Farmers</p>
                                                <p className="color-G">Daily Yield: 0 BNB</p>
                                            </div>
                                        </div>
                                        <div className="box-hire-one two py-2 me-3 d-flex">
                                            <img src="spimages/9.png" className="mx-2" alt="" />
                                            <div className="box-hire-one-text mx-2">
                                                <p>Wallet</p>
                                                <p className="color-G"> 0 BNB</p>
                                            </div>
                                        </div>
                                        <div className="nd-box m-4 d-flex  text-center">
                                            <div className="nd-box-1 mx-5">
                                                <p className="text-white">Cart will be full in</p>
                                                <p className="color-G-dot">00:00:00</p>
                                            </div>
                                            <img src="spimages/Rectangle 5229.png" className="mx-5" alt="" />
                                            <div className="nd-box-1">
                                                <p className="text-white">Time until next hire
                                                    bonus is activated:</p>
                                                <p className="color-G-dot me-5">00:00:00</p>
                                            </div>
                                        </div>
                                        <div className="deposit">
                                            <p className="text-white px-3">1. Deposit BNB <span>( min 0 , max 0 )</span></p>
                                            <input type="number" className="px-2 mx-3 text-white" />
                                            <button className="text-center mx-3 my-4 text-white">HIRE 0 FARMERS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  py-4">
                                <div className="another-box text-center p-5">
                                    <div className="one-arrow d-flex">
                                        <p className="text-white mx-5"> 0 Farmers</p>
                                        <p className="text-white mx-5"><i className="fa-solid fa-right-long" /></p>
                                        <p className="mx-5 color-G ">0 BNB</p>
                                    </div>
                                    <div className="last-one-box p-5 text-center">
                                        <p className="text-white">Estimated daily yield:</p>
                                        <p className="color-G mx-5">0 BNB </p>
                                    </div>
                                    <div className="last-one-boxtext-center">
                                        <p className="text-white"> Compound Count:</p>
                                        <p className="color-G mx-5">0 Time/s </p>
                                    </div>
                                    <input type="text" placeholder="Sell crops in 00:00:00 -80% tax" className="text-white px-3 mt-5" />
                                    <button className="text-center mx-3 my-4">HIRE MORE FARMERS (+0%)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq">
                    <div className="container">
                        <img src="spimages/FAQ.png" className="img-fluid my-5" alt="" />
                        <div className="row">
                            <div className="col-lg-6">
                                <p>
                                    <a className="btn py-3 text-white" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is the recommended strategy? <span className="ms-5 text-white"><i className="fa-solid fa-plus" /></span> </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card card-body">
                                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a className="btn py-3 text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is the recommended strategy? <span className="ms-5"><i className="fa-solid fa-plus" /></span> </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                                            <div className="card card-body">
                                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a className="btn py-3 text-white" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is the recommended strategy? <span className="ms-5"><i className="fa-solid fa-plus" /></span> </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample3">
                                            <div className="card card-body">
                                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a className="btn py-3 text-white" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is the recommended strategy? <span className="ms-5"><i className="fa-solid fa-plus" /></span> </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample4">
                                            <div className="card card-body">
                                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <a className="btn py-3 text-white" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is the recommended strategy? <span className="ms-5"><i className="fa-solid fa-plus" /></span> </a>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample5">
                                            <div className="card card-body">
                                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="spimages/faq img.png" className="img-fluid faq-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <a href="#"><i className=" text-white one fa-brands fa-facebook-f" /> </a>
                                <a href="#"><i className=" text-white mx-3 two fa-brands fa-twitter" /></a>
                                <a href="#"><i className="text-white two fa-brands fa-instagram" /></a>
                            </div>
                            <div className="col-lg-6">
                                <p className="text-white">Copyright © 2021 Space Miners.All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-3">
                                <p className="text-white">Privacy Policy    <span className="mx-3">|</span>     Term of Use</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* JavaScript Bundle with Popper */}
            </div>

        </div>
    )
}

export default SpaceMiner