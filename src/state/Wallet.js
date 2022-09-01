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
        tradingOpen:false,
        timespan:0,
        lastAwarded:{
            _lastAwarded:'',
            _lastAwardedCash:0,
            _lastAwardedTokens:0,
            _lastAwardedTimestamp:0
        }
    }, // default value (aka initial value)
});

export const utilStates= atom({
    key:'utilStates',
    defailt:{
        isOpenPendingTXModal:false
    }
})