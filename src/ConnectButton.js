import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

async function getAccount() {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"});
    const account = accounts[0]
    return account;
}

export default function ConnectButton() {
    const [accountAddress, setAccountAddress] = useState("");

    const connectButtonOnClick = () => {
        if(typeof window !== "undefined"){
            getAccount().then((response) => {
                setAccountAddress(response);
            });
        }
    };

    return (
        <Button variant="contained" onClick={connectButtonOnClick}>
            {!!accountAddress ? accountAddress : "Connect Wallet"}
        </Button>
    );
}