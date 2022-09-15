import React, { useEffect } from "react";
import {
    BrowserRouter,
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
import { fetchContract } from "../utils";
import { useRecoilState } from 'recoil'
import { walletState } from "../state/Wallet";
import DuplicateUser from "./DuplicateUser";

export const App = () => {
    const [walletStateValue, setWalletState] = useRecoilState(walletState)

    useEffect(async () => {
        var contract = await fetchContract()
        var userWallet
        console.log(contract)
        var ownerWallet = await contract.methods.owner().call()
        console.log("")

        var swapandLiquify = await contract.methods.swapAndLiquifyEnabled().call()
        var tradingOpen = await contract.methods.tradingOpen().call()
        var jackpotTimespan = await contract.methods.jackpotTimespan().call()
        var lastAwarded = await contract.methods.getLastAwarded().call()
        var lastAwardedAddress = lastAwarded["0"]
        var lastAwardedCash = lastAwarded["1"]
        var lastAwardedTokens = lastAwarded["2"]
        var lastAwardedTimestamp = lastAwarded["3"]
        console.log(
            contract,
            userWallet,
            ownerWallet,
            swapandLiquify,
            tradingOpen,
            jackpotTimespan,
            lastAwarded,
            lastAwardedAddress,
            lastAwardedCash,
            lastAwardedTokens,
            lastAwardedTimestamp
        );
        if (localStorage.getItem("isConnected")) {
            var contract = await fetchContract()
            var ownerWallet = await contract.methods.owner().call()
            userWallet = await getWalletAddressOrConnect()
            var isOwner = false

            if (ownerWallet.toLowerCase().split(' ')[0] == userWallet.toLowerCase().split(' ')[0]) {
                isOwner = true
            } else {
                isOwner = false
            }
            setWalletState({
                ...walletStateValue,
                isLoaded: true,
                userWallet: userWallet,
                isOwner: isOwner,
                isWalletConnected: true,
            })
        } else {
            setWalletState({
                ...walletStateValue,
                ownerWallet: ownerWallet,
                // userWallet: userWallet,
                // isOwner: isOwner,
                // isWalletConnected: true,
                swapAndLiquify: swapandLiquify,
                tradingOpen: tradingOpen,
                isLoaded: true,
                timespan: jackpotTimespan,
                lastAwarded: {
                    _lastAwarded: lastAwardedAddress,
                    _lastAwardedCash: lastAwardedCash,
                    _lastAwardedTokens: lastAwardedTokens,
                    _lastAwardedTimestamp: lastAwardedTimestamp
                }
            })
        }

        window.ethereum.on('accountsChanged', async function (accounts) {
            if (accounts.length < 1) {
                localStorage.removeItem("isConnected")
                window.location.reload()
            } else {
                localStorage.setItem("isConnected", true)
                var contract = await fetchContract()
                var ownerWallet = await contract.methods.owner().call()
                var userWallet = accounts[0]
                var isOwner = false
                if (ownerWallet.toLowerCase().split(' ')[0] == userWallet.toLowerCase().split(' ')[0]) {
                    isOwner = true
                } else {
                    isOwner = false
                }
                setWalletState({
                    ...walletStateValue,
                    isLoaded: true,
                    userWallet: accounts[0],
                    isOwner: isOwner,
                    isWalletConnected: true,
                })
            }
        })
        window.ethereum.on("disconnect", async function (op) {
            console.log(op)
        })
    }, [])
    return (
        <BrowserRouter>
            <div>
                {
                    walletStateValue.isLoaded ?

                        <div>
                            <ToastContainer position="bottom-right" />
                            <div className='app'>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/jackpot" element={<Jackpot />} />
                                    <Route path="/space-miner" element={<SpaceMiner />} />
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
        </BrowserRouter>
    )
}
