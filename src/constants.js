
import { toast } from 'react-toastify';
import Web3 from 'web3';
import Contract from 'web3-eth-contract';
const abi = require('./abi.json')
const BNB_DECIMALS = 18;


export const bnbDecimals = BNB_DECIMALS
export const JACKPOT_CASHOUT_MIN = 4000;
export const JACKPOT_CASHOUT_MAX = 7000;
export const JACKPOT_BUYER_SHARE_MIN = 5000;
export const JACKPOT_BUYER_SHARE_MAX = 10000;
export const JACKPOT_MINBUY_MIN = 5 * 10 ** (BNB_DECIMALS - 2);
export const JACKPOT_MINBUY_MAX = 5 * 10 ** (BNB_DECIMALS - 1);
export const JACKPOT_BIGBANG_BUYBACK_MIN = 3000;
export const JACKPOT_BIGBANG_BUYBACK_MAX = 7000;


export const contractAddress = "0x86C59e5A5EE43033d310a8Cf107196202A52a846"
// export const backendURL="https://ludo-ol.herokuapp.com"
export const MAX_PCT = 10000;


export const NETWORKS = {
    1: {
        name: "Ethereum",
        rpcURL: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        testnetID: 4,
        blockExplorerURL: "https://etherscan.io"
    },
    42: {
        name: "Kovan",
        rpcURL: "https://kovan.infura.io/v3/84842078b09946638c03157f83405213",
        currency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        testnetID: 42,
        blockExplorerURL: "https://kovan.etherscan.io"
    },
    4: {
        name: "Rinkeby",
        rpcURL: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        currency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        testnetID: 4,
        blockExplorerURL: "https://rinkeby.etherscan.io"
    },
    137: {
        name: "Polygon",
        rpcURL: "https://polygon-rpc.com/",
        currency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18
        },
        testnetID: 80001,
        blockExplorerURL: "https://polygonscan.com"
    },
    80001: {
        name: "Mumbai (Polygon Testnet)",
        rpcURL: "https://rpc-mumbai.maticvigil.com/",
        currency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18
        },
        testnetID: 80001,
        blockExplorerURL: "https://mumbai.polygonscan.com"
    },
    56: {
        name: "Binance",
        rpcURL: "https://bsc-dataseed1.binance.org",
        currency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
        },
        testnetID: 97,
        blockExplorerURL: "https://bscscan.com",
    },
    97: {
        name: "Binance Smart Chain Testnet",
        rpcURL: "https://data-seed-prebsc-1-s1.binance.org:8545",
        currency: {
            name: "Binance Coin",
            symbol: "tBNB",
            decimals: 18,
        },
        testnetID: 97,
        blockExplorerURL: "https://testnet.bscscan.com",
    },
    1285: {
        name: "Moonriver",
        rpcURL: "https://rpc.moonriver.moonbeam.network",
        currency: {
            name: "MOVR",
            symbol: "MOVR",
            decimals: 18,
        },
        testnetID: 1287,
        blockExplorerURL: "https://blockscout.moonriver.moonbeam.network"
    },
    1287: {
        name: "Moonbase Alpha",
        rpcURL: "https://rpc.testnet.moonbeam.network",
        currency: {
            name: "DEV",
            symbol: "DEV",
            decimals: 18,
        },
        testnetID: 1287,
        blockExplorerURL: "https://moonbase-blockscout.testnet.moonbeam.network"
    }
}

export const backendURL = () => {
    if (window.location.href.includes("localhost")) {
        return "http://localhost:5000"
    }
    return "https://ludo-ol.herokuapp.com"
}
export const fromWei = (number) => {
    return Web3.utils.fromWei(`${number}00`)
}
export const toWei = (number) => {
    return Web3.utils.toWei(`${number}00`)
}
export const LudoContractRef = async () => {
    if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        var web3Provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")
        window.web3 = new Web3(web3Provider)
    }
    Contract.setProvider(window.web3.currentProvider);
    return await new Contract(abi, contractAddress);
}
export const copyToClip = (id, message) => {

    var copyText = document.getElementById(`${id}`);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    toast.success(message)
}