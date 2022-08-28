import Web3 from 'web3'
import Contract from 'web3-eth-contract'
import { contractAddress } from './constants';
const abi  = require('./abi.json')

export const isMobile = () => /Mobi/i.test(window.navigator.userAgent)
    || /iPhone|iPod|iPad/i.test(navigator.userAgent);

export const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
        result[key] = mapFn(object[key]);
        return result
    }, {})
}

export const normalizeURL = (u) => ((new URL(u).host).replace('www.', ''))

export const parseTxError = (error) => {
    try {
        return {
            code: error.code ?? JSON.parse(`{${error.message.split("{")[1]}`).code,
            message: error.message.split("{")[0].trim()
        };
    } catch (parse_error) {
        console.log("Failed to parse error code and message")
        console.log("Original error:", error)
        return {
            code: undefined, message: error?.toString()
        }
    }
}

// Avoid big number errors without using external libraries
export const formatValue = (v) => v.toLocaleString('fullwide', {
    useGrouping: false
});
export const walletShortFormer =  (wallet) => {
    return `${wallet.slice(0, 7)}...${wallet.slice(wallet.length - 5, wallet.length)}`
}
export async function fetchContract() {
    if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        var web3Provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")
        window.web3 = new Web3(web3Provider)
    }
    Contract.setProvider(window.web3.currentProvider);
    return await new Contract(abi, contractAddress);
}