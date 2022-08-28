import Web3 from 'web3';
import Contract from 'web3-eth-contract';
import { contractAddress } from './constants';
const abi = require('./Contract/abi.json')
// export const backendURL = "http://localhost:5000";
export const backendURL = "https://tguard.herokuapp.com";

export const  LudoContractRef = async()=> {
    if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        var web3Provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")
        window.web3 = new Web3(web3Provider)
    }
    Contract.setProvider(window.web3.currentProvider);
    return await new Contract(abi, contractAddress);
}
