import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
// pages
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Jackpot from "./pages/jackpot/Jackpot";
import SpaceMiner from "./pages/spaceMiner/SpaceMiner";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getWalletAddressOrConnect } from "../wallet";
import { fetchContract, walletShortFormer } from "../utils";
import { useRecoilState } from 'recoil'
import { walletState } from "../state/Wallet";
import DuplicateUser from "./DuplicateUser";

export const App = () => {
    const [walletStateValue, setWalletState] = useRecoilState(walletState)

    useEffect(async () => {
        var userWallet = await getWalletAddressOrConnect()
        var contract = await fetchContract()
        var ownerWallet = await contract.methods.owner().call()
        var swapandLiquify = await contract.methods.swapAndLiquifyEnabled().call()
        var tradingOpen = await contract.methods.tradingOpen().call()
        var isOwner = false
        if (ownerWallet.toLowerCase().split(' ')[0] == userWallet.toLowerCase().split(' ')[0]) {
            isOwner = true
        } else {
            isOwner = false
        }
        setTimeout(() => {

            setWalletState({
                ...walletStateValue,
                ownerWallet: ownerWallet,
                userWallet: userWallet,
                isOwner: isOwner,
                isWalletConnected: true,
                swapAndLiquify: swapandLiquify,
                tradingOpen: tradingOpen,
                isLoaded: true
            })
        }, 2000);

        window.ethereum.on('accountsChanged', function (account) {
            window.location.reload()
        })
        return
    }, [])
    return (
        <Router>
            <div>
                {
                    walletStateValue.isLoaded ?

                        <div>
                            <ToastContainer position="bottom-right" />
                            <div className='app'>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/jackpot" element={<Jackpot />} />
                                    <Route path="/p2e" element={<SpaceMiner />} />
                                    {
                                        walletStateValue.isOwner ?
                                            <Route path="/dashboard" element={<Dashboard />} />
                                            : <Route path="/dashboard" element={<DuplicateUser />} />
                                    }
                                </Routes>
                            </div>
                        </div> :
                        <div className='loading_container'>
                            <img src='/loading.gif' />
                        </div>
                }
            </div>
        </Router>
    )
}
