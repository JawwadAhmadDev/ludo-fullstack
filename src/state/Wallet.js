import {atom} from 'recoil'



export const walletState = atom({
    key: 'wallet', // unique ID (with respect to other atoms/selectors)
    default: {
        isWalletConnected:false,
        ownerWallet:'',
        userWallet:'',
        isOwner:false
    }, // default value (aka initial value)
});