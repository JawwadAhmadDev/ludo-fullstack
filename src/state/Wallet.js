import {atom} from 'recoil'



export const walletState = atom({
    key: 'wallet', // unique ID (with respect to other atoms/selectors)
    default: {
        isLoaded:false,
        isWalletConnected:false,
        ownerWallet:'',
        userWallet:'',
        isOwner:false,
        swapAndLiquify:false,
        tradingOpen:false
    }, // default value (aka initial value)
});

export const utilStates= atom({
    key:'utilStates',
    defailt:{
        isOpenPendingTXModal:false
    }
})