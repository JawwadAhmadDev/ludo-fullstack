import { flexbox } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connectWallet } from '../../../wallet'
import "./css/spaceMiner.css"
const SpaceMiner = () => {

    const [walletStatus, setWalletStatus] = useState("CONNECT WALLET")
    useEffect(() => {
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
                        <Link className="navbar-brand spnavbar-brand" to="/">Space miners</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link spnav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link spnav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link spnav-link " to="#">Games</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link spnav-link" to="#">Tournaments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link spnav-link" to="#">Contact us</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link spnav-link mx-2" href="https://telegram.com" style={{ color: 'white' }}>
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
                            <div className="col-lg-8 top-down">
                                <p className="text-one cp_font" style={{
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    fontSize: '50px',
                                }}>put your footprint in </p>
                                <p className="text-uppercase text-two cp_font space_miner_text" style={{
                                    fontSize: '60px',
                                    fontWeight: 'bold'
                                }}>SPACE MINERS</p>

                                <div className="text-box row">
                                    <div className="text-box-one col-md-6">
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>6% Daily ~ 2190% APR</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>7% Referrals</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>4 Hours Withdraw Cooldown</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>10 Times Mandatory Compound Feature</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>Anti-Bot Launch
                                        </p>
                                    </div>
                                    <div className="text-box-two col-md-6">
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>6% Daily ~ 2190% APR</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>7% Referrals</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>4 Hours Withdraw Cooldown</p>
                                        <p><span className="px-3"><img src="spimages/tick.png" alt="" /></span>10 Times Mandatory Compound Feature</p>
                                    </div>
                                </div>
                                <p className="text-white last-text p-4 " style={{ fontSize: '16px' }}>
                                    We believe that helping people on this planet that live below the breadline is important and we all need to play our part. Crypto Phil has started a campaign to donate 1 day per month income to those in need. We salute Phil for this and will be donating 0.3% of the TVL to this cause. Follow Crypto Phil on YouTube to see these funds in action and see how you can do your part. Here's a video on where the charity funds will go. <a href="#" style={{ textDecoration: 'underline' }}>Click Here!</a>
                                </p>
                            </div>
                            <div className="col-lg-6"> </div>
                        </div>
                    </div>
                </div>
                <div className="scetion-statistics">
                    <div className="container">
                        <div className="row py-5">
                            <img style={{ width: '460px' }} src='/images/statistics_txt.png' />
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

                    <div className=" pb-5">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md10 offset-md1'>
                                    <div className='row mt-4'>
                                        <img style={{ borderRadius: '60px', width: '260px' }} src='/images/crops_farm_hub.png' />
                                        {/* <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1.png" className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1 (1).png" className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <a href="#"><img src="spimages/btn1 (2).png" className="img-fluid" alt="" /></a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-dashboard pb-5 pt-4 mt-5">
                    <div className="container mt-5">
                        <div className='text-center'>
                            <img src="/images/miner_dashboard.png" style={{ width: '450px' }} alt="" />
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-3 ">
                                <div className='miner_flex_box'>
                                    <div className="miner_flex_box_inner">
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} >
                                            <img style={{ width: '36px' }} src="spimages/31.png" />
                                        </div>
                                        <div className="miner_item">
                                            <p className="m-0 text-white">Initial Deposit</p>
                                            <p className="m-0 color-g">50,000 BNB</p>
                                        </div>
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img style={{ width: '36px' }} src="spimages/30.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className='miner_flex_box'>
                                    <div className="miner_flex_box_inner">
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} >
                                            <img style={{ width: '36px' }} src="spimages/32.png" />
                                        </div>
                                        <div className="miner_item">
                                            <p className="m-0 text-white">Total Deposit</p>
                                            <p className="m-0 color-g">50,000 BNB</p>
                                        </div>
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img style={{ width: '36px' }} src="spimages/30.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className='miner_flex_box'>
                                    <div className="miner_flex_box_inner">
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} >
                                            <img style={{ width: '36px' }} src="spimages/33.png" />
                                        </div>
                                        <div className="miner_item">
                                            <p className="m-0 text-white">Withdrawn</p>
                                            <p className="m-0 color-g">38,590 BNB</p>
                                        </div>
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img style={{ width: '36px' }} src="spimages/30.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className='miner_flex_box'>
                                    <div className="miner_flex_box_inner">
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} >
                                            <img style={{ width: '36px' }} src="spimages/26.png" />
                                        </div>
                                        <div className="miner_item">
                                            <p className="m-0 text-white">Referrals</p>
                                            <p className="m-0 color-g">150 BNB</p>
                                        </div>
                                        <div className='miner_item' style={{
                                            display: 'flex',
                                            width: '38px',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img style={{ width: '36px' }} src="spimages/30.png" />
                                        </div>
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
                                    <div className="box-hire p-3">
                                        <div className='mt-3'>
                                            <h4 className="">Hiring Example</h4>
                                        </div>
                                        <div className='mt-3' style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                                            <div className="" style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "225px",
                                                height: '60px'
                                            }} >
                                                <div style={{ display: 'flex', width: '41px', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src="spimages/30.png" className="" style={{
                                                        width: "40px",
                                                        height: "40px",
                                                    }} alt="" />
                                                </div>
                                                <div className="">
                                                    <p style={{ margin: '0', fontSize: '20px' }} >1 BNB = 0 Farmers</p>
                                                    <p style={{ margin: '0', fontSize: '20px' }} className="color-g">Daily Yield: 0 BNB</p>
                                                </div>
                                            </div>
                                            <div className="flex_space_btn wallet_box" style={{
                                                width: "145px",
                                                height: "68px",
                                                background: "#1B004C",
                                                borderRadius: "6px",
                                                padding: "5px 10px",
                                            }}>

                                                <div style={{ display: 'flex', width: '41px', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src="spimages/9.png" className="" style={{
                                                        width: "40px",
                                                        height: "40px",
                                                    }} alt="" />
                                                </div>
                                                <div className=" ">
                                                    <p style={{ fontSize: '20px', margin: '0' }}>Wallet</p>
                                                    <p style={{ fontSize: '20px', margin: '0' }} className="color-G"> 0 BNB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex_space_btn mt-3" style={{ color: 'white' }}>
                                            <div style={{ width: '50%', padding: '10px', textAlign: 'center' }}>
                                                <p className="" style={{ fontSize: '22px' }}>⌛ Cart will be full in</p>
                                                <span className="color-g" style={{ fontSize: '24px', borderBottom: '3px dotted white' }}>00:00:00</span>
                                            </div>
                                            {/* <img src="spimages/Rectangle 5229.png" className="" alt="" /> */}
                                            <div style={{ width: '50%', padding: '10px', textAlign: 'center' }}>
                                                <p className="" style={{ fontSize: '22px' }} >🕑 Time until next hire
                                                    bonus is activated:</p>
                                                <span className="color-g" style={{ fontSize: '24px', borderBottom: '3px dotted white' }}>02:50:12</span>
                                            </div>
                                        </div>
                                        <div className="deposit mt-3">
                                            <p className="text-white px-3 font_robo" style={{ fontWeight: '400' }}>1. Deposit BNB <span>( min 0 , max 0 )</span></p>
                                            <input type="number" className="px-2 mx-3 text-white" />
                                            <button className="text-center hire_shadow_btn mx-3 my-4 ">HIRE 0 FARMERS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  mt-4">
                                <div className="another-box text-center p-3">
                                    <div className="one-arrow d-flex mt-4">
                                        <p className="text-white mx-5"> 0 Farmers</p>
                                        <p className="text-white mx-5"><i className="fa-solid fa-right-long" /></p>
                                        <p className="mx-5 color-G ">0 BNB</p>
                                    </div>
                                    <div className="last-one-box p-5 text-center">
                                        <p className="text-white m-0">Estimated daily yield:</p>
                                        <p className="color-G mx-5 m-0">0 BNB </p>
                                    </div>
                                    <div className="last-one-boxtext-center">
                                        <p className="text-white m-0"> Compound Count:</p>
                                        <p className="color-G mx-5 m-0">0 Time/s </p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-10 offset-1'>
                                            <input type="text" placeholder="Sell crops in 00:00:00 -80% tax" className="text-white px-3 mt-5" />
                                            <button className="hire_shadow_btn text-center mx-3 my-4" style={{ textAligh: 'center' }} value={'Sell crops in 00:00:00  -80% tax'} >HIRE MORE FARMERS (+0%)</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 mb-5 col-10 offset-1'>
                                <p style={{ color: 'white', textAlign: 'center' }}>Every time you compound without withdrawing, your compound bonus grows by 0% (max +0%). Withdrawing will reset your bonus to 0.
                                    Earn 0% when someone uses your referral link! </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq">
                    <div className="container">
                        <h2 className='cp_font  space_miner_text' >FAQ</h2>
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
                                <p className="text-white font_robo ">Copyright © 2021 Space Miners.All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-3">
                                <p className="text-white font_robo ">Privacy Policy    <span className="mx-3">|</span>     Term of Use</p>
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