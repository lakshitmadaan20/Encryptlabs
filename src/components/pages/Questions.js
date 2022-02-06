import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is a smart contract?",
            content: `Smart contracts are the backbone of the blockchain industry. They are digital forms that are coded with the rules and the conditions of the entire architecture of the transactions. Thus, if the rules and conditions are met successfully, the transaction is executed automatically, else execution will be terminated.`,
        },
        {
            title: "Benefits of a smart contract service",
            content: "The benefits of utilising smart contract services consist of great advantageous factors for the platform such as complete anonymity, data backup, complete accuracy, high speed, and extremely safe to transact funds.",
        },
        {
            title: "How to get a smart contract?",
            content: `Smart contracts are the core component of any blockchain network. You can get these software applications developed by contacting different blockchain development companies and then choose your preferred blockchain developer.`,
        },
        {
            title: "What is Ethereum Smart contract development?",
            content: <p>Smart contracts are a really important part of any decentralised application. They can be developed on various different blockchains, hence, smart contracts built on ethereum blockchain are called Ethereum smart contracts. These are developed mostly due to their widespread possible uses among the masses.</p>,
        },
        {
            title: "How Smart Contracts Work?",
            content: <p>Smart contracts are programmable code. The working of a smart contract is dependent completely on the conditions used while coding. When the conditions entered by the user are met with the smart contract condition, the transaction is successful. Else the transaction is terminated immediately.</p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'blue',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const Questions = () => {
    return (
        <div className="mt-4 mb-4">
            <br />
            <br/>
            <div className="container">
            <Faq
            data={data}
            styles={styles}
            config={config}
        />
            </div>
            <br />
            <br/>
    </div>
    )
}

export default Questions;
